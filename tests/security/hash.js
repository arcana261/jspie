"use strict";

const hash = require('../../lib/security/hash');
const expect = require('chai').expect;
const iterable = require('xcane').iterable;
const task = require('xcane').task;

describe('JsPieSecurityHash', () => {
  describe('#random()', () => {
    it('should construct hashes', done => {
      task.spawn(function* () {
        let result = yield iterable.async(iterable.range(0, 20))
          .select(x => hash.random(30))
          .toArray();

        expect(iterable.from(result).uniqueBy().count()).to.be.equal(20);
        expect(iterable.from(result).every(x => x.length > 30)).to.be.true;
      }).then(() => done()).catch(done);
    });
  });
});
