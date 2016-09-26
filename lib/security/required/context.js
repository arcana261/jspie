"use strict";

const type = require('xcane').type;
let Factory = null;

/**
 * @desc Provides a base abstraction for a warehouse containing information
 * about users.
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
class JsPieSecurityRequiredContext {
  /**
   * @desc finds a specific user given a username
   * @param {string} username - target username
   * @return {Promise.<JsPieSecurityRequiredUser>} - a user
   */
  findByUsername(username) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc finds a session given access token
   * @param {string} token - session bearer token
   * @return {Promise.<JsPieSecurityRequiredSession>} - a session
   */
  findByToken(token) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc creates a new session
   * @param {JsPieSecurityRequiredUser} user - user object
   * @param {JsPieRequestBase} request - request object
   * @return {Promise.<JsPieSecurityRequiredSession>} - new session
   */
  createSession(user, request) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc deletes a session
   * @param {JsPieSecurityRequiredSession} session - user session
   * @return {Promise} - fulfils when session is removed
   */
  deleteSession(session) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc updates a session given data
   * @param {JsPieSecurityRequiredSession} session - user session
   * @return {Promise} - fulfils when session is updated
   */
  updateSession(session) {
    return Promise.reject(new Error('not implemented'));
  }

  /**
   * @desc use a specific implementation of security context
   * @param {JsPieSecurityRequiredContext=} klass - a context constructor
   */
  static use(klass) {
    Factory = klass;
  }

  /**
   * @desc creates a new instance of security context
   * @return {JsPieSecurityRequiredContext} - new context
   */
  static create() {
    if (!type.isFunction(Factory)) {
      return new JsPieSecurityRequiredContext();
    }

    return new Factory();
  }
}

module.exports = JsPieSecurityRequiredContext;
