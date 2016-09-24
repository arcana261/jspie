"use strict";

const type = require('xcane').type;
const statusCodes = require('./statusCodes');

/**
 * @desc Provides abstract base class for server responses
 * @author Mohamad mehdi Kharatizadeh - kharatizadeh@denaecommerce.com
 */
class JsPieHttpObject {
  /**
   * @desc creates a new instance of server response
   */
  constructor() {
    this._statusCode = statusCodes.ok;
    this._headers = {};
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
        return this._headers[key.toLowerCase()];
      }

      return Object.assign(this._headers, key);
    }

    this._serverResponse.headers[key.toLowerCase()] = value;
    return value;
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

  /**
   * @desc gets content type associated with this response
   * @return {string} - HTTP content-type field associated with response
   */
  get contentType() {
    return this.header('content-type');
  }

  /**
   * @desc sets content type associated with this response
   * @param {string} value - new HTTP content-type field
   */
  set contentType(value) {
    this.header('content-type', value);
  }
}

module.exports = JsPieHttpObject;
