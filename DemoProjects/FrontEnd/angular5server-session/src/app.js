import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import './config/passport.config';

import {getProducts, getProduct, postProducts, putProducts, deleteProducts} from './controllers/products.controller';
import {isLoggedIn, postLogin, postLogout, postRegister} from "./controllers/users.controller";
import Product from "./models/products.model";

// Connect to Mongodb
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const conn = mongoose.connect("mongodb://localhost:27017/mercury", { useNewUrlParser: true });
conn.then(() => {
  console.log('mongodb connected!');
  // const PRODUCTS = [
  //   { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
  //   { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg' },
  //   { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg' },
  //   { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg' },
  //   { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg' },
  //   { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg' },
  //   { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png' },
  //   { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg' },
  //   { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg' },
  // ];
  // PRODUCTS.forEach(p => {
  //   const product = new Product(p);
  //   product.save(err => {
  //     if (err) return next(err);
  //     console.log(`${p.name} is added.`);
  //   });
  // });
}, (err) => {
  console.log('mongodb connection failed.');
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
  name: 'JSESSIONID',
  secret: "msi",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', postLogin);
app.post('/register', postRegister);
app.post('/logout', postLogout);

app.get('/products', getProducts);
app.get('/products/:_id', getProduct);
app.post('/products', postProducts);
app.put('/products/:_id', putProducts);
app.delete('/products/:_id', isLoggedIn, deleteProducts);

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