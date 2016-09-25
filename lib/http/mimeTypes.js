"use strict";

const mimeTypes = require('mime-types');
const iterable = require('xcane').iterable;
const type = require('xcane').type;
let searchTable = null;
let reverseTable = null;
let all = null;

/**
 * @desc lists important known mime types
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 * @namespace JsPieHttpMimeTypes
 */
module.exports = Object.freeze({
  /**
   * @desc MIME type for json documents
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  json: mimeTypes.lookup('json'),

  /**
   * @desc MIME type for yaml documents
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  yaml: mimeTypes.lookup('yaml'),

  /**
   * @desc MIME type for html documents
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  html: mimeTypes.lookup('html'),

  /**
   * @desc MIME type for txt documents
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  text: mimeTypes.lookup('txt'),
  /**
   * @desc MIME type for GIF images
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  gif: mimeTypes.lookup('gif'),
  /**
   * @desc MIME type for JPEG images
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  jpeg: mimeTypes.lookup('jpeg'),
  /**
   * @desc MIME type for PNG images
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  png: mimeTypes.lookup('png'),
  /**
   * @desc extended mime type to show encoding-less data. data has to
   * be re-encoded based on client Accept header
   * @memberof JsPieHttpMimeTypes
   * @type string
   */
  jsPieData: 'application/x-jspi-data',

  /**
   * @desc searches for known mime types matching a search string of form
   * text/*.
   * @param {string} criteria - string to search
   * @return {Array.<string>} - list of mime types matching criteria
   */
  search(criteria) {
    criteria = criteria.toLowerCase();

    if (criteria === '*/*') {
      if (all === null) {
        all = iterable.from(Object.keys(module.exports))
          .select(x => module.exports[x])
          .where(x => type.isString(x))
          .orderBy()
          .toArray();
      }

      return all;
    }

    if (criteria.match(/^[^\/]+\/\*$/)) {
      if (searchTable === null) {
        searchTable = iterable.from(Object.keys(module.exports))
          .select(x => module.exports[x])
          .where(x => type.isString(x))
          .select(x => ({
            catagory: x.split('/')[0].toLowerCase(),
            value: x
          }))
          .groupBy(['catagory'])
          .accumulate({}, (prev, v) => Object.assign(prev, {
            [v.key.catagory]: v.items.select(x => x.value).orderBy().toArray()
          }));
      }

      return searchTable[criteria.split('/')[0]] || [];
    }

    if (reverseTable === null) {
      reverseTable = iterable.from(Object.keys(module.exports))
        .accumulate({}, (prev, v) => Object.assign(prev, {
          [module.exports[v]]: true
        }));
    }

    if (reverseTable[criteria] === true) {
      return [criteria];
    }

    return [];
  }
});
