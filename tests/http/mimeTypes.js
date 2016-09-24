"use strict";

const mimeTypes = require('../../lib/http/mimeTypes');
const expect = require('chai').expect;

describe('JsPieMimeTypes', () => {
  describe('#literals()', () => {
    it('should be frozen', () => {
      expect(mimeTypes).to.be.frozen;
    });

    it('should return correct value for json', () => {
      expect(mimeTypes.json).to.be.equal('application/json');
    });

    it('should return correct value for yaml', () => {
      expect(mimeTypes.yaml).to.be.equal('text/yaml');
    });

    it('should return correct value for html', () => {
      expect(mimeTypes.html).to.be.equal('text/html');
    });

    it('should return correct value for text', () => {
      expect(mimeTypes.text).to.be.equal('text/plain');
    });

    it('should return correct value for jsPieData', () => {
      expect(mimeTypes.jsPieData).to.be.equal('application/x-jspi-data');
    });
  });
});
