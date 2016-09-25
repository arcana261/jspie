"use strict";

const type = require('xcane').type;
const statusCodes = require('./statusCodes');
const mimeTypes = require('./mimeTypes');
const headers = require('./headers');
const iterable = require('xcane').iterable;
const comparer = require('xcane').comparer;

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
    this._payload = null;
    this._acceptLanguage = null;
    this._accept = null;
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

      for (const entry of Object.entries(key)) {
        const targetKey = entry[0].toLowerCase();

        if (targetKey === headers.acceptLanguage) {
          this._acceptLanguage = null;
        } else if (targetKey === headers.accept) {
          this._accept = null;
        }

        this._headers[targetKey] = entry[1];
      }

      return this._headers;
    }

    key = key.toLowerCase();

    if (key === headers.acceptLanguage) {
      this._acceptLanguage = null;
    } else if (key === headers.accept) {
      this._accept = null;
    }

    this._headers[key] = value;
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
    return this.header(headers.contentType);
  }

  /**
   * @desc sets content type associated with this response
   * @param {string} value - new HTTP content-type field
   */
  set contentType(value) {
    this.header(headers.contentType, value);
  }

  /**
   * @desc gets Accept-Language HTTP header parsed as array of accepted
   * languages
   * @return {Array.<string>} - list of accepted languages
   */
  get acceptLanguage() {
    if (!type.isNull(this._acceptLanguage)) {
      return this._acceptLanguage;
    }

    const headerField = this.header(headers.acceptLanguage);

    if (!type.isString(headerField)) {
      return undefined;
    }

    this._acceptLanguage = iterable.from(headerField.toLowerCase().split(','))
      .select((x, index) =>
        iterable.from(x.split(';'))
          .reduce((prev, v, i) => {
            if (i === 0) {
              return {
                value: v.trim().replace(/-.*$/g, ''),
                order: 1.0,
                index: -(index + 1)
              };
            }

            let type = v.split('=').map(x => x.trim());
            if (type[0] === 'q') {
              return Object.assign(prev, {
                order: Number(type[1])
              });
            }

            return prev;
          })
      )
      .uniqueBy('value')
      .orderBy(comparer.descending(['order', 'index']))
      .select(x => x.value)
      .toArray();

    return this._acceptLanguage;
  }

  /**
   * @desc sets HTTP header Accept-Language from an array of preferred
   * languages
   * @param {Array.<string>} value - list of languages
   */
  set acceptLanguage(value) {
    if (!type.isArray(value)) {
      value = [value];
    }

    this.header(headers.acceptLanguage,
       iterable.from(value).accumulate('', (prev, v, i) =>
         `${prev ? prev + ', ' : ''}${v}; q=${1 - i / value.length}`
       ));
    this._acceptLanguage = value;
  }

  /**
   * @desc parses HTTP header accept for content negotiation and returns
   * and ordered array of known MIME types
   * @return {Array.<string>} - an ordered array of known mime types
   */
  get accept() {
    if (!type.isNull(this._accept)) {
      return this._accept;
    }

    const value = this.header(headers.accept);

    if (!type.isString(value)) {
      return undefined;
    }

    this._accept = iterable.from(value.toLowerCase().split(','))
      .select((x, index) =>
        iterable.from(x.split(';'))
          .reduce((prev, v, i) => {
            if (i === 0) {
              return {
                criteria: v.trim(),
                order: 1.0,
                index: -(index + 1)
              };
            }

            let type = v.split('=').map(x => x.trim());

            if (type[0] === 'q') {
              return Object.assign(prev, {
                order: Number(type[1])
              });
            }

            return prev;
          })
      )
      .select(x => mimeTypes.search(x.criteria).map(y => ({
        value: y,
        order: x.order,
        index: x.index
      })))
      .flatten()
      .groupBy(['value'])
      .select(x => ({
        value: x.key.value,
        order: x.items.max(['order', 'index']).order,
        index: x.items.max(['order', 'index']).index
      }))
      .orderBy((le, ri) => {
        if (le.order < ri.order) {
          return 1;
        }

        if (le.order > ri.order) {
          return -1;
        }

        if (le.index < ri.index) {
          return 1;
        }

        if (le.index > ri.index) {
          return -1;
        }

        if (le.value < ri.value) {
          return -1;
        }

        if (le.value > ri.value) {
          return 1;
        }

        return 0;
      })
      .select(x => x.value)
      .toArray();

    return this._accept;
  }

  /**
   * @desc formats HTTP header Accept for content negotiation from
   * an ordered array of known mime types
   * @param {Array.<string>} value - ordered array of mime types
   */
  set accept(value) {
    if (!type.isArray(value)) {
      value = [value];
    }

    this.header(headers.accept,
      iterable.from(value).accumulate('', (prev, v, i) =>
        `${prev ? prev + ', ' : ''}${v}; q=${1 - i / value.length}`));
    this._accept = value;
  }

  /**
   * @desc gets payload associated with HTTP object
   * @return {string} - payload should be string
   */
  get payload() {
    return this._payload;
  }

  /**
   * @desc sets payload associated with HTTP object
   * @param {string} value - payload should be string
   */
  set payload(value) {
    this._payload = value;
  }
}

module.exports = JsPieHttpObject;
