"use strict";

const JsPieResponseData = require('../../lib/response/data');
const mimeTypes = require('../../lib/http/mimeTypes');
const expect = require('chai').expect;

let x = new JsPieResponseData();

beforeEach(() => {
  x = new JsPieResponseData();
});

describe('JsPieResponseData', () => {
  describe('#constructor', () => {
    it('should set mime type correctly', () =>
      expect(x.contentType).to.be.equal(mimeTypes.data));
  });
});
