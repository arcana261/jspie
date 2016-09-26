"use strict";

const BaseContext = require('../required/context');

class JsPieSecurityProvidedContext extends BaseContext {
  constructor() {
    super();

    this._users = {};
    this._sessions = {};
  }

  findByUsername(username) {
    if (!this._users.hasOwnProperty(username)) {
      return Promise.reject(new Error(`user not found: ${username}`));
    }

    return Promise.resolve(this._users[username]);
  }

  addUser(user) {
    if (this._users.hasOwnProperty(user.username)) {
      return Promise.reject(new Error(`user exists: ${user.username}`));
    }


  }
}

module.exports = JsPieSecurityProvidedContext;
