import Product from '../models/products.model';

export function getProducts(req, res) {
  Product.find((err, docs) => {
    res.json(docs);
  });
}

export function getProduct(req, res) {
  const {_id} = req.params;
  Product.findOne({_id}, (err, doc) => {
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
  const {_id} = req.params;
  Product.findOneAndUpdate({_id}, product, err => {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}

export function deleteProducts(req, res) {
  const {_id} = req.params;
  Product.remove({_id}, (err) => {
    if (err) return next(err);
    res.json({
      success: true
    });
  });
}