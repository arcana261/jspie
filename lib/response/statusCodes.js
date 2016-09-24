"use strict";

/**
 * @namespace JsPieStatusCodes
 * @author Mohamad mehdi Kharatizadeh - m_kharatizadeh@yahoo.com
 * @desc provides const literals for known HTTP status codes
 */
module.exports = Object.freeze({
  /**
   * @desc HTTP OK (200) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  ok: 200,

  /**
   * @desc HTTP Internal Server Error (500) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  internalServerError: 500,

  /**
   * @desc HTTP CONFLICT (409) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  conflict: 409,

  /**
   * @desc HTTP Not Found (404) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  notFound: 404,

  /**
   * @desc HTTP Bad Request (400) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  badRequest: 400,

  /**
   * @desc HTTP UnAuthorized (401) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  unauthorized: 401,

  /**
   * @desc HTTP Forbidden (403) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  forbidden: 403,

  /**
   * @desc HTTP Payment Required (402) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  paymentRequired: 402,

  /**
   * @desc HTTP UnSupported Media Type(415) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  unsupportedMediaType: 415,

  /**
   * @desc HTTP Payload too large (413) literal
   * @memberof JsPieStatusCodes
   * @type number
   */
  payloadTooLarge: 413
});
