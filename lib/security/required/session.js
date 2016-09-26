"use strict";

const type = require('xcane').type;
let Factory = null;

/**
 * @desc shows an abstraction of session data
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
class JsPieSecurityRequiredSession {
  /**
   * @desc gets session id assigned with session object
   * @return {string} - session id
   */
  get token() {
    throw new Error('not implemented');
  }

  /**
   * @desc gets originating IP address of client
   * @return {string} - ip address
   */
  get clientAddress() {
    throw new Error('not implemented');
  }

  /**
   * @desc gets user agent associated with originating client
   * @return {string} - user agent of client
   */
  get userAgent() {
    throw new Error('not implemented');
  }

  /**
   * @desc shows when session is going to be expired
   * @return {date} - expiration date
   */
  get expires() {
    throw new Error('not implemented');
  }

  /**
   * @desc shows when session was last accessed
   * @return {date} - last access time
   */
  get lastAccessed() {
    throw new Error('not implemented');
  }

  /**
   * @desc shows access roles of user with session
   * @return {Array.<string>} - access roles
   */
  get roles() {
    throw new Error('not implemented');
  }

  /**
   * @desc gets session data
   * @param {string} key - key to data
   * @return {Promise.<string>} - session data
   */
  get(key) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc sets session data
   * @param {string} key - key to data
   * @param {string} value - value to set
   * @return {Promise} - fulfils when data is set
   */
  set(key, value) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc removes session data
   * @param {string} key - key to data
   * @return {Promise} - fulfils when data is removed
   */
  remove(key) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc allows selecting specifc implementation of security sessions
   * @param {JsPieSecurityRequiredSession=} klass - constructor
   */
  static use(klass) {
    Factory = klass;
  }

  /**
   * @desc creates a new instance of session
   * @return {JsPieSecurityRequiredSession} - new session
   */
  static create() {
    if (!type.isFunction(Factory)) {
      return new JsPieSecurityRequiredSession();
    }

    return new Factory();
  }
}

module.exports = JsPieSecurityRequiredSession;
