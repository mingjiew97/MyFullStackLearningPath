import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';

import { app } from '../src/app';

describe('products API', () => {

  let product = {
    "name": "mock",
    "brand": "mock",
    "price": 888,
    "stock": 888,
    "image": "https://s3.amazonaws.com/msi-tech/msi.png",
  };

  describe('POST /products', () => {
    it('should add a products', (done) => {
      request(app)
        .post('/products')
        .send(product)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.success).to.be.true;
          done();
        })
        .catch(done);
    });
  });

  describe('GET /products', () => {
    it('should get all products', (done) => {
      request(app)
        .get('/products')
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('GET /products/:name', () => {
    it('should get one product by name', (done) => {
      request(app)
        .get(`/products/${product.name}`)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.name).to.equal(product.name);
          expect(res.body.brand).to.equal(product.brand);
          done();
        })
        .catch(done);
    });
  });

  describe('PUT /products/:name', () => {
    it('should put one product', (done) => {
      const p = Object.assign(product, { price: 999 });
      request(app)
        .put(`/products/${product.name}`)
        .send(p)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.success).to.be.true;
          done();
        })
        .catch(done);
    });
  });

  describe('DELETE /product', () => {
    it('should delete one product', (done) => {
      request(app)
        .delete(`/products/${product.name}`)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.success).to.be.true;
          done();
        })
        .catch(done);
    });
  });

});