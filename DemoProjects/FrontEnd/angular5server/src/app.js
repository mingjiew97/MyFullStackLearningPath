import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import expressJwt from 'express-jwt';

import {getHeroes} from './controllers/heroes.controller';
import {getProducts, getProduct, postProducts, putProducts, deleteProducts} from './controllers/products.controller';
import {postLogin, postSocialLogin, postRegister} from "./controllers/users.controller";
import './config/passport.config';

// Connect to Mongodb
mongoose.Promise = global.Promise;
const conn = mongoose.connect("mongodb://localhost:27017/mercury");
conn.then(() => {
  console.log('mongodb connected!');
}, (err) => {
  console.log('mongodb connection failed.');
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.post('/login', postLogin);
app.post('/fblogin', passport.authenticate('facebook-token', {session: false}), postSocialLogin);
app.post('/googlelogin', passport.authenticate('google-token', {session: false}), postSocialLogin);
app.post('/register', postRegister);

app.get('/heroes', getHeroes);

app.use('/products', expressJwt({
  secret: 'msi'
}));

app.get('/products', getProducts);
app.get('/products/:name', getProduct);
app.post('/products', postProducts);
app.put('/products/:name', putProducts);
app.delete('/products/:name', deleteProducts);

// error handling
app.use((err, req, res, next) => {
  res.json({
    success: false,
    err: err
  })
});

app.listen(process.env.port || 3000);
console.log("server started");

export {app};