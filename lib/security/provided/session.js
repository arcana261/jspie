"use strict";

const BaseSession = require('../required/session');

/**
 * @desc Provides a mock implementation of session management
 * @augments JsPieSecurityRequiredSession
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
class JsPieSecurityProvidedSession extends BaseSession {
  /**
   * @desc creates a new instance of JsPieSecurityProvidedSession
   */
  constructor() {
    super();

    this._token = '';
    this._clientAddress = '';
    this._userAgent = '';
    this._expires = new Date();
    this._lastAccessed = new Date();
    this._roles = [];
    this._bag = {};
  }

  /**
   * @desc gets token associated with session
   * @return {string} - token hash
   */
  get token() {
    return this._token;
  }

  /**
   * @desc sets token associated with session
   * @param {string} value - token hash
   */
  set token(value) {
    this._token = value;
  }

  /**
   * @desc gets client ip address associated with session
   * @return {string} - client ip address
   */
  get clientAddress() {
    return this._clientAddress;
  }

  /**
   * @desc sets client ip address associated with session
   * @param {string} value - client ip address
   */
  set clientAddress(value) {
    this._clientAddress = value;
  }

  /**
   * @desc gets user agent (browser) associated with session
   * @return {string} - user agent
   */
  get userAgent() {
    return this._userAgent;
  }

  /**
   * @desc sets user agent (browser) associated with session
   * @param {string} value - user agent
   */
  set userAgent(value) {
    this._userAgent = value;
  }

  /**
   * @desc gets date which session is going to expire
   * @return {date} - expiration date
   */
  get expires() {
    return this._expires;
  }

  /**
   * @desc sets expiration date of session
   * @param {date} value - expiration date
   */
  set expires(value) {
    this._expires = value;
  }

  /**
   * @desc gets the date which session was last accessed
   * @return {date} - last access date of session
   */
  get lastAccessed() {
    return this._lastAccessed;
  }

  /**
   * @desc sets last access date of session
   * @param {date} value - last access date of session
   */
  set lastAccessed(value) {
    this._lastAccessed = value;
  }

  /**
   * @desc gets roles associated with this session
   * @return {Array.<string>} - roles associated with session
   */
  get roles() {
    return this._roles;
  }

  /**
   * @desc sets roles associated with session
   * @param {Array.<string>} value - roles associated with session
   */
  set roles(value) {
    this._roles = value;
  }

  /**
   * @desc gets session data
   * @param {string} key - key to session data
   * @return {Promise.<string>} - fulfils to session data
   */
  get(key) {
    return Promise.resolve(this._bag[key]);
  }

  /**
   * @desc sets session data
   * @param {string} key - target key
   * @param {string} value - new value
   * @return {Promise} - fulfils when data is set
   */
  set(key, value) {
    this._bag[key] = value;
    return Promise.resolve();
  }

  /**
   * @desc removes session data
   * @param {string} key - target key
   * @return {Promise} - fulfils when data is removed
   */
  remove(key) {
    delete this._bag[key];
    return Promise.resolve();
  }
}

module.exports = JsPieSecurityProvidedSession;
