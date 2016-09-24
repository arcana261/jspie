const headers = require('../../lib/http/headers');
const expect = require('chai').expect;

describe('JsPieHttpHeaders', () => {
  describe('#literals', () => {
    it('should be frozen', () => {
      expect(headers).to.be.frozen;
    });

    it('Content-Type', () => {
      expect(headers.contentType).to.be.equal('content-type');
    });
  });
});
