/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner} The populated <code>TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('originalTransactionId')) {
        obj['originalTransactionId'] = ApiClient.convertToType(data['originalTransactionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Network transaction identifier (TID). You can use this value to identify a specific transaction when you are discussing the transaction with your processor. Not all processors provide this  value. 
   * @member {String} originalTransactionId
   */
  exports.prototype['originalTransactionId'] = undefined;



  return exports;
}));


