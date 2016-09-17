"use strict";

const type = require('xcane').type;

/**
 * @desc Provides abstract base class for server responses
 * @author Mohamad mehdi Kharatizadeh - kharatizadeh@denaecommerce.com
 */
class JsPieBaseResponse {
  /**
   * @desc creates a new instance of server response
   * @param {number} statusCode - http status code of response
   * @param {string} contentType - content type of response
   */
  constructor(statusCode, contentType) {
    this._statusCode = statusCode;
    this._headers = {
      'content-type': contentType
    };
  }

  /**
   * @desc gets/sets response headers. it can be used in 3 ways:
   *  - no arguments: whole headers as an object hash is returned
   *  - single argument (string): value for a header is returned
   *  - single argument (hash of strings): sets multiple headers at once
   *  - two arguments: (string, string): value is set for a header
   * @param {string|*} [key] - key of header to get/set value
   * @param {string=} value - new value of http header
   * @return {string|*} - new/old value of an http header or an object hash
   * of all set http headers
   */
  header(key, value) {
    if (arguments.length === 0) {
      return this._headers;
    }

    if (arguments.length === 1) {
      if (type.isString(key)) {
        return this._headers[name.toLowerCase()];
      }

      return _.forOwn(name, function (value, key) {
        this._serverResponse.headers[key.toLowerCase()] = value;
      });
    }
    this._serverResponse.headers[name.toLowerCase()] = arguments[1];
  }

  /**
   * @desc gets http status code associated with this response
   * @returns {number}
   */
  get statusCode() {
    return this._serverResponse.statusCode;
  }

  /**
   * @desc sets http status code associated with this response
   * @param value {number}
   */
  set statusCode(value) {
    this._serverResponse.statusCode = value;
  }

  /**
   * @desc gets content type associated with this response
   * @returns {string}
   */
  get contentType() {
    return this.header('content-type');
  }

  /**
   * @desc sets content type associated with this response
   * @param value {string}
   */
  set contentType(value) {
    this.header('content-type', value);
  }
}

module.exports = JsPieBaseResponse;
