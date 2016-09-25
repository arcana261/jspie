"use strict";

const HttpObject = require('../../lib/http/object');
const statusCodes = require('../../lib/http/statusCodes');
const mimeTypes = require('../../lib/http/mimeTypes');
const languages = require('../../lib/http/languages');
const headers = require('../../lib/http/headers');
const expect = require('chai').expect;

let x = new HttpObject();

beforeEach(() => {
  x = new HttpObject();
});

describe('JsPieHttpObject', () => {
  describe('#constructor()', () => {
    it('should construct object correctly', () => {
      expect(x.payload).to.be.null;
      expect(x.header()).to.be.deep.equal({});
    });
  });

  describe('#header()', () => {
    it('should set/get single item', () => {
      expect(x.header('some-header')).to.be.undefined;
      x.header('some-header', 'some-value');
      expect(x.header('some-header')).to.be.equal('some-value');
    });

    it('should work with contentType named header', () => {
      expect(x.contentType).to.be.undefined;
      x.header(headers.contentType, mimeTypes.json);
      expect(x.contentType).to.be.equal(mimeTypes.json);
      x.contentType = mimeTypes.yaml;
      expect(x.header(headers.contentType)).to.be.equal(mimeTypes.yaml);
    });

    it('should work with acceptLanguage named header', () => {
      expect(x.acceptLanguage).to.be.undefined;
      x.header(headers.acceptLanguage, 'de; q=0.5, en; q=1.0');
      expect(x.acceptLanguage).to.be.deep.equal(['en', 'de']);
      x.acceptLanguage = 'fa';
      expect(x.header(headers.acceptLanguage)).to.be.equal('fa; q=1');
      x.acceptLanguage = ['fa', 'ar'];
      expect(x.header(headers.acceptLanguage)).to.be.equal(
        'fa; q=1, ar; q=0.5');
      x.header(headers.acceptLanguage, 'fr, de');
      expect(x.acceptLanguage).to.be.deep.equal(['fr', 'de']);
    });

    it('should work with accept named header', () => {
      expect(x.accept).to.be.undefined;
      x.header(headers.accept, 'text/html; q=1.0, text/*; q=0.8, image/gif; q=0.6, image/jpeg; q=0.6, image/*; q=0.5, */*; q=0.1');
      expect(x.accept).to.be.deep.equal(
        ['text/html',
         'text/plain',
         'text/yaml',
         'image/gif',
         'image/jpeg',
         'image/png',
         'application/json',
         'application/x-jspi-data',
         'application/xml']);
      x.accept = 'text/yaml';
      expect(x.header(headers.accept)).to.be.deep.equal('text/yaml; q=1');
      x.accept = ['text/yaml', 'application/json'];
      expect(x.header(headers.accept)).to.be.deep.equal(
        'text/yaml; q=1, application/json; q=0.5');
      x.header(headers.accept, 'image/gif, image/jpeg');
      expect(x.accept).to.be.deep.equal(['image/gif', 'image/jpeg']);
    });
  });
});
