import {expect} from 'chai';

import {app} from '../src/app';

describe("server", () => {
  it("server should exist", () => {
    expect(app).to.exist;
  });
});