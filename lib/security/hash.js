"use strict";

const crypto = require('mz/crypto');
const task = require('xcane').task;

/**
 * @desc Provides utilities to work with cryptographic hashes
 * @namespace JsPieSecurityHash
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
module.exports = Object.freeze({
  /**
   * @desc creates a random cryptographic hash
   * @param {number} nBytes - generate a hash using provided bytes
   * @return {Promise.<string>} - generated hash
   * @memberof JsPieSecurityHash
   */
  random: nBytes => task.spawn(function * task() {
    return (yield crypto.randomBytes(nBytes))
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  })
});
