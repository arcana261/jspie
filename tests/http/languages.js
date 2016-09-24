"use strict";

const languages = require('../../lib/http/languages');
const expect = require('chai').expect;

describe('JsPieHttpLanguages', () => {
  describe('#literals', () => {
    it('should be frozen', () => expect(languages).to.be.frozen);
    it('Farsi', () => expect(languages.fa).to.be.equal('fa'));
    it('Arabic', () => expect(languages.ar).to.be.equal('ar'));
    it('English', () => expect(languages.en).to.be.equal('en'));
  });
});
