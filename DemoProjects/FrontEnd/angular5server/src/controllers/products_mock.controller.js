import { products as PRODUCTS } from '../models/products.model';

let products = PRODUCTS.slice();

export function getProducts(req, res) {
  res.json(products);
}

export function getProduct(req, res) {
  const {name} = req.params;
  res.json(products.find((p) => p.name === name));
}

export function postProducts(req, res) {
  const product = req.body;
  products.push(product);
  res.json(products);
}

export function putProducts(req, res) {
  const product = req.body;
  deleteProduct(product.name);
  products.push(product);
  res.json(products);
}

export function deleteProducts(req, res) {
  const {name} = req.params;
  deleteProduct(name);
  if(!products.length){
    products = PRODUCTS.slice();
  }
  res.json(products);
}

function deleteProduct(name){
  let index;
  products.forEach((p, i) => {
    if (name === p.name) {
      index = i;
    }
  });
  products.splice(index, 1);
}