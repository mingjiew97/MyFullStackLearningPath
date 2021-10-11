import {expect} from 'chai';
import sinon from 'sinon';
import _ from 'lodash';

import {getHeroes} from '../../src/controllers/heroes.controller';

describe("heroes controller", () => {

  describe("heroes controller exists", () => {
    it("getHeroes exists", () => {
      expect(getHeroes).to.exist;
    });
  });

  describe("heroes controller works", () => {
    it("getHeroes exists", () => {
      let req, res, spy;

      req = res = {};
      spy = res.json = sinon.spy();

      getHeroes(req, res);

      const result = _.flatten(spy.args)[0];
      expect(result).to.be.exist;
      expect(result).to.be.an('array');
      expect(result.length).to.equal(10);
    });
  });

});