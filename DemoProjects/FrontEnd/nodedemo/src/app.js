import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {getUsers} from "./controllers/user.controller";
import {login, register} from "./controllers/auth.controller";
import expressJwt from 'express-jwt';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/msi';
const SECRET = process.env.SECRET || 'msi';

// connnect to Mongodb
const promise = mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
});
promise.then(() => {
  console.log("Mongodb connected!");
}, (err) => {
  console.log(err);
  console.log("Mongodb connection error!");
  process.exit();
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// auth
app.post('/login', login);
app.post('/register', register);

// users
app.get('/users', expressJwt({secret: SECRET}));
app.get('/users', getUsers);

app.get('/health', (req, res) => {
  res.send('It works!');
});

// error handling
app.use((err, req, res, next) => {
  res.json({
    success: false,
    err: err
  })
});

app.listen(PORT);