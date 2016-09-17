"use strict";

const mimeTypes = require('mime-types');

/**
 * @desc lists important known mime types
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 * @namespace JsPieMimeTypes
 */
module.exports = Object.freeze({
  /**
   * @desc MIME type for json documents
   * @memberof JsPieMimeTypes
   * @type string
   */
  json: mimeTypes.lookup('json'),

  /**
   * @desc MIME type for yaml documents
   * @memberof JsPieMimeTypes
   * @type string
   */
  yaml: mimeTypes.lookup('yaml'),

  /**
   * @desc MIME type for html documents
   * @memberof JsPieMimeTypes
   * @type string
   */
  html: mimeTypes.lookup('html'),

  /**
   * @desc MIME type for txt documents
   * @memberof JsPieMimeTypes
   * @type string
   */
  text: mimeTypes.lookup('txt'),

  /**
   * @desc extended mime type to show encoding-less data. data has to
   * be re-encoded based on client Accept header
   * @memberof JsPieMimeTypes
   * @type string
   */
  jsPieData: 'application/x-jspi-data'
});
