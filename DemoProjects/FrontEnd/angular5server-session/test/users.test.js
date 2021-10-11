import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';

import { app } from '../src/app';
import User from '../src/models/users.model';

describe('users API', () => {
  let user = {
    "email": "mock@mock.mock",
    "name": "mock",
    "password": "mock"
  };

  // remove newly created user.
  after((done)=> {
    User.remove({email: user.email}, (err) => {
      done();
    });
  });

  describe('POST /register', () => {
    it('should register an user', (done) => {
      request(app)
        .post('/register')
        .send(user)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.success).to.be.true;
          done();
        })
        .catch(done);
    });
  });

  describe('POST /login', () => {
    it('should login an user', (done) => {
      request(app)
        .post('/login')
        .send(user)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.success).to.be.true;
          done();
        })
        .catch(done);
    });
  });

});