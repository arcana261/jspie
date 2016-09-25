"use strict";

const HttpObject = require('../http/object');
const statusCodes = require('../http/statusCodes');

/**
 * @desc provides base abstration for response objects
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 * @augments JsPieHttpObject
 */
class JsPieResponseBase extends HttpObject {
  /**
   * @desc creates a new instance of response object
   */
  constructor() {
    super();

    this._statusCode = statusCodes.ok;
  }

  /**
   * @desc gets http status code associated with this response
   * @return {number} - HTTP status code assigned with response
   */
  get statusCode() {
    return this._statusCode;
  }

  /**
   * @desc sets http status code associated with this response
   * @param {number} value - new HTTP status code to assign
   */
  set statusCode(value) {
    this._statusCode = value;
  }
}

module.exports = JsPieResponseBase;
