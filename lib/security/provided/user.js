"use strict";

const BaseUser = require('../required/user');

/**
 * @desc Provides a mock implementation of security interface for users
 * @augments JsPieSecurityRequiredUser
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
class JsPieSecurityProvidedUser extends BaseUser {
  /**
   * @desc creates a new instance of JsPieSecurityProvidedUser
   */
  constructor() {
    super();

    this._username = '';
    this._password = '';
    this._roles = [];
  }

  /**
   * @desc gets username associated with user
   * @return {string} - username
   */
  get username() {
    return this._username;
  }

  /**
   * @desc sets username associated with user
   * @param {string} value - new username
   */
  set username(value) {
    this._username = value;
  }

  /**
   * @desc gets password associated with user
   * @return {string} - password
   */
  get password() {
    return this._password;
  }

  /**
   * @desc sets password associated with user
   * @param {string} value - new password
   */
  set password(value) {
    this._password = value;
  }

  /**
   * @desc gets security roles associated with user
   * @return {Array.<string>} - security roles
   */
  get roles() {
    return this._roles;
  }

  /**
   * @desc sets security roles associated with user
   * @param {Array.<string>} value - new roles
   */
  set roles(value) {
    this._roles = value;
  }
}

module.exports = JsPieSecurityProvidedUser;
