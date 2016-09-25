"use strict";

/**
 * @desc Base abstration for users
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
class JsPieSecurityRequiredUser {
  /**
   * @desc gets username associated with user object
   * @return {string} - username
   */
  get username() {
    throw new Error('not implemented');
  }

  /**
   * @desc sets username associated with user object
   * @param {string} value - username
   */
  set username(value) {
    throw new Error('not implemented');
  }

  /**
   * @desc gets roles associated with user object
   * @return {Array.<string>} - roles
   */
  get roles() {
    throw new Error('not implemented');
  }

  /**
   * @desc sets roles associated with user object
   * @param {Array.<string>} value - roles
   */
  set roles(value) {
    throw new Error('not implemented');
  }
}

module.exports = JsPieSecurityRequiredUser;
