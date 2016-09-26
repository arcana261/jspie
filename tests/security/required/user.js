"use strict";

const expect = require('chai').expect;
const User = require('../../../lib/security/required/user');
const Mock = require('../../../lib/security/provided/user');

beforeEach(() => {
  User.use();
});

describe('JsPieSecurityRequiredUser', () => {
  describe('#use()', () => {
    it('should correctly use new instance', () => {
      let x = User.create();
      expect(x).to.be.an.instanceof(User);
      expect(x).to.not.be.an.instanceof(Mock);
      User.use(Mock);
      x = User.create();
      expect(x).to.be.an.instanceof(User);
      expect(x).to.be.an.instanceof(Mock);
      User.use();
      x = User.create();
      expect(x).to.be.an.instanceof(User);
      expect(x).to.not.be.an.instanceof(Mock);
    });
  });
});
