"use strict";

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
}

module.exports = JsPieSecurityRequiredContext;
