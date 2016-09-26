"use strict";

const expect = require('chai').expect;
const BaseSession = require('../../../lib/security/required/session');
const MockSession = require('../../../lib/security/provided/session');

beforeEach(() => {
  BaseSession.use();
});

describe('JsPieSecurityRequiredSession', () => {
  describe('#use()', () => {
    expect(BaseSession.create()).to.be.an.instanceof(BaseSession);
    expect(BaseSession.create()).to.not.be.an.instanceof(MockSession);
    BaseSession.use(MockSession);
    expect(BaseSession.create()).to.be.an.instanceof(BaseSession);
    expect(BaseSession.create()).to.be.an.instanceof(MockSession);
    BaseSession.use();
    expect(BaseSession.create()).to.be.an.instanceof(BaseSession);
    expect(BaseSession.create()).to.not.be.an.instanceof(MockSession);
  });
});
