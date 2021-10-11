import Product from '../models/products.model';

export function getProducts(req, res) {
  console.log(req.user);
  Product.find((err, docs) => {
    res.json(docs);
  });
}

export function getProduct(req, res) {
  const {name} = req.params;
  Product.findOne({name}, (err, doc) => {
    res.json(doc);
  });
}

export function postProducts(req, res, next) {
  const product = new Product(req.body);
  product.save(err => {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}

export function putProducts(req, res) {
  const product = req.body; // new Product will generate new _id which is immutable.
  const {name} = req.params;
  Product.findOneAndUpdate({name}, product, err => {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}

export function deleteProducts(req, res) {
  const {name} = req.params;
  Product.remove({name}, (err) => {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}