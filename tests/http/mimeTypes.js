"use strict";

const mimeTypes = require('../../lib/http/mimeTypes');
const expect = require('chai').expect;
const iterable = require('xcane').iterable;
const type = require('xcane').type;

describe('JsPieHttpMimeTypes', () => {
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

    it('should return correct value for xml', () => {
      expect(mimeTypes.xml).to.be.equal('application/xml');
    });

    it('should return correct value for jsPieData', () => {
      expect(mimeTypes.jsPieData).to.be.equal('application/x-jspi-data');
    });

    it('should return correct value for gif', () =>
      expect(mimeTypes.gif).to.be.equal('image/gif'));

    it('should return correct value for jpeg', () =>
      expect(mimeTypes.jpeg).to.be.equal('image/jpeg'));

    it('should return correct value for png', () =>
      expect(mimeTypes.png).to.be.equal('image/png'));
  });

  describe('#search()', () => {
    it('should return all matching star search', () => {
      expect(mimeTypes.search('text/*')).to.be.deep.equal(
        iterable.from(Object.keys(mimeTypes))
          .select(x => mimeTypes[x])
          .where(x => type.isString(x))
          .where(x => x.match('text/.*'))
          .orderBy()
          .toArray());
    });

    it('should return empty matching empty star search', () => {
      expect(mimeTypes.search('none/*')).to.be.deep.equal([]);
    });

    it('should return empty on weird star search', () => {
      expect(mimeTypes.search('te*')).to.be.deep.equal([]);
    });

    it('should return single item using single item search', () => {
      expect(mimeTypes.search('text/html')).to.be.deep.equal(['text/html']);
    });

    it('should return empty on non-existing search', () => {
      expect(mimeTypes.search('text/none')).to.be.deep.equal([]);
    });

    it('should return all known mime types through all search', () => {
      expect(mimeTypes.search('*/*')).to.be.deep.equal(
        iterable.from(Object.keys(mimeTypes))
          .select(x => mimeTypes[x])
          .where(x => type.isString(x))
          .orderBy()
          .toArray());
    });
  });
});
