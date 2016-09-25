"use strict";

const BaseResponse = require('../../lib/response/base');
const expect = require('chai').expect;
const statusCodes = require('../../lib/http/statusCodes');

let x = new BaseResponse();

beforeEach(() => {
  x = new BaseResponse();
});

describe('JsPieResponseBase', () => {
  describe('#constructor', () => {
    it('should correctly initialize values', () => {
      expect(x.statusCode).to.be.equal(statusCodes.ok);
    });
  });
});
