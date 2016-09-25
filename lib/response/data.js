"use strict";

const ResponseBase = require('./base');
const mimeTypes = require('../http/mimeTypes');

/**
 * @desc is used to represent javascript object-like data
 * @augments JsPieResponseBase
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 */
class JsPieResponseData extends ResponseBase {
  /**
   * @desc creates a new instance of JsPieResponseData
   */
  constructor() {
    super();
    this.contentType = mimeTypes.data;
  }
}

module.exports = JsPieResponseData;
