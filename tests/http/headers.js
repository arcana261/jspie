const headers = require('../../lib/http/headers');
const expect = require('chai').expect;

describe('JsPieHttpHeaders', () => {
  describe('#literals', () => {
    it('should be frozen', () => expect(headers).to.be.frozen);
    it('Content-Type', () =>
      expect(headers.contentType).to.be.equal('content-type'));
    it('Authorization', () =>
      expect(headers.authorization).to.be.equal('authorization'));
    it('Accept-Langauge', () =>
      expect(headers.acceptLanguage).to.be.equal('accept-language'));
    it('Accept', () =>
      expect(headers.accept).to.be.equal('accept'));
  });
});
