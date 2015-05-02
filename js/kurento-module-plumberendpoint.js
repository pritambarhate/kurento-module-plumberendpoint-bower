require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var Endpoint = kurentoClient.register.abstracts.Endpoint;


function noop(error) {
  if (error) console.trace(error);
};


/**
 * Builder for the {@link module:plumberendpoint.PlumberEndpoint 
 * PlumberEndpoint}
 *
 * @classdesc
 *  Endpoint that allows remote pipelines to negotiate the format of the media 
 *  as well as to send data over SCTP. A {@link 
 *  module:plumberendpoint.PlumberEndpoint PlumberEndpoint} contains paired sink
 *
 * @extends module:core/abstracts.Endpoint
 *
 * @constructor module:plumberendpoint.PlumberEndpoint
 */
function PlumberEndpoint(){
  PlumberEndpoint.super_.call(this);
};
inherits(PlumberEndpoint, Endpoint);


//
// Public properties
//

/**
 * IP Address where this endpoint will be waiting for incoming connections of 
 * the control channel
 *
 * @alias module:plumberendpoint.PlumberEndpoint#getAddress
 *
 * @param {module:plumberendpoint.PlumberEndpoint~getAddressCallback} [callback]
 *
 * @return {external:Promise}
 */
PlumberEndpoint.prototype.getAddress = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getAddress', callback);
};
/**
 * @callback module:plumberendpoint.PlumberEndpoint~getAddressCallback
 * @param {external:Error} error
 * @param {external:String} result
 */

/**
 * Local port where this end point is attached
 *
 * @alias module:plumberendpoint.PlumberEndpoint#getPort
 *
 * @param {module:plumberendpoint.PlumberEndpoint~getPortCallback} [callback]
 *
 * @return {external:Promise}
 */
PlumberEndpoint.prototype.getPort = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getPort', callback);
};
/**
 * @callback module:plumberendpoint.PlumberEndpoint~getPortCallback
 * @param {external:Error} error
 * @param {external:Integer} result
 */


//
// Public methods
//


/**
 * Connect a control channel to the remote {@link 
 * module:plumberendpoint.PlumberEndpoint PlumberEndpoint}
 *
 * @alias module:plumberendpoint.PlumberEndpoint.link
 *
 * @param   {external:String} address

 *  IP Address where the {@link module:plumberendpoint.PlumberEndpoint 
 *  PlumberEndpoint} is waiting for
 *
 * @param   {external:Integer} port

 *  Port where the {@link module:plumberendpoint.PlumberEndpoint 
 *  PlumberEndpoint} is listening to
 *
 * @param {module:plumberendpoint.PlumberEndpoint~linkCallback} [callback]
 *
 * @return {external:Promise}
 */
PlumberEndpoint.prototype.link = function(address, port, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('String', 'address', address, {required: true}
);
  checkType('int', 'port', port, {required: true}
);

  var params = {
    address: address,
    port: port,
  };

  return this._invoke(transaction, 'link', params, callback);
};
/**
 * @callback module:plumberendpoint.PlumberEndpoint~linkCallback
 * @param {external:Error} error
 * @param {external:Boolean} result
 *  If both :rom:cls:`PlumberEndpoints` could be connected
 */


/**
 * @alias module:plumberendpoint.PlumberEndpoint.constructorParams
 *
 * @property   {module:core.MediaPipeline} mediaPipeline

 *  the {@link module:core.MediaPipeline MediaPipeline} to which the endpoint 
 *  belongs
 */
PlumberEndpoint.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },
};

/**
 * @alias module:plumberendpoint.PlumberEndpoint.events
 *
 * @extends module:core/abstracts.Endpoint.events
 */
PlumberEndpoint.events = Endpoint.events;


/**
 * Checker for {@link plumberendpoint.PlumberEndpoint}
 *
 * @memberof module:plumberendpoint
 *
 * @param {external:String} key
 * @param {module:plumberendpoint.PlumberEndpoint} value
 */
function checkPlumberEndpoint(key, value)
{
  if(!(value instanceof PlumberEndpoint))
    throw ChecktypeError(key, PlumberEndpoint, value);
};


module.exports = PlumberEndpoint;

PlumberEndpoint.check = checkPlumberEndpoint;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-plumberendpoint package on the browser
 */

require('.');

},{".":"kurento-module-plumberendpoint"}],"kurento-module-plumberendpoint":[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module plumberendpoint
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license LGPL
 */

Object.defineProperty(exports, 'name',    {value: 'plumberendpoint'});
Object.defineProperty(exports, 'version', {value: '6.0.0-dev'});


var PlumberEndpoint = require('./PlumberEndpoint');


exports.PlumberEndpoint = PlumberEndpoint;

},{"./PlumberEndpoint":1}]},{},[2]);
