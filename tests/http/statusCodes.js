"use strict";

const statusCodes = require('../../lib/http/statusCodes');
const expect = require('chai').expect;

describe('JsPieHttpStatusCodes', () => {
  describe('#literals()', () => {
    it('should be frozen', () => {
      expect(statusCodes).to.be.frozen;
    });

    it('HTTP OK', () => {
      expect(statusCodes.ok).to.be.equal(200);
    });

    it('HTTP INTERNAL SERVER ERROR', () => {
      expect(statusCodes.internalServerError).to.be.equal(500);
    });

    it('HTTP CONFLICT', () => {
      expect(statusCodes.conflict).to.be.equal(409);
    });

    it('HTTP NOT FOUND', () => {
      expect(statusCodes.notFound).to.be.equal(404);
    });

    it('HTTP BAD REQUEST', () => {
      expect(statusCodes.badRequest).to.be.equal(400);
    });

    it('HTTP UNAUTHORIZED', () => {
      expect(statusCodes.unauthorized).to.be.equal(401);
    });

    it('HTTP FORBIDDEN', () => {
      expect(statusCodes.forbidden).to.be.equal(403);
    });

    it('HTTP PAYMENT REQUIRED', () => {
      expect(statusCodes.paymentRequired).to.be.equal(402);
    });

    it('HTTP UNSUPPORTED MEDIA TYPE', () => {
      expect(statusCodes.unsupportedMediaType).to.be.equal(415);
    });

    it('HTTP PAYLOAD TOO LARGE', () => {
      expect(statusCodes.payloadTooLarge).to.be.equal(413);
    });
  });
});
