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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.InlineResponse200Jwk();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200Jwk', function() {
    it('should create an instance of InlineResponse200Jwk', function() {
      // uncomment below and update the code to test InlineResponse200Jwk
      //var instane = new CyberSource.InlineResponse200Jwk();
      //expect(instance).to.be.a(CyberSource.InlineResponse200Jwk);
    });

    it('should have the property kty (base name: "kty")', function() {
      // uncomment below and update the code to test the property kty
      //var instane = new CyberSource.InlineResponse200Jwk();
      //expect(instance).to.be();
    });

    it('should have the property use (base name: "use")', function() {
      // uncomment below and update the code to test the property use
      //var instane = new CyberSource.InlineResponse200Jwk();
      //expect(instance).to.be();
    });

    it('should have the property kid (base name: "kid")', function() {
      // uncomment below and update the code to test the property kid
      //var instane = new CyberSource.InlineResponse200Jwk();
      //expect(instance).to.be();
    });

    it('should have the property n (base name: "n")', function() {
      // uncomment below and update the code to test the property n
      //var instane = new CyberSource.InlineResponse200Jwk();
      //expect(instance).to.be();
    });

    it('should have the property e (base name: "e")', function() {
      // uncomment below and update the code to test the property e
      //var instane = new CyberSource.InlineResponse200Jwk();
      //expect(instance).to.be();
    });

  });

}));
