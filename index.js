/**
 * * This is an opensource project that aims to provide
 * * useful code wrappers for ExtJS functionalities.
 *
 * * Feel free to contribute to this repo.
 *
 * ! ExtJS 6.2.0 GPL
 *
 * * Sample Usage:
 * * const Kony = require('konyvtar-js');
 */

const component = require('./lib/component');
const grid = require('./lib/grid');
const store = require('./lib/store');

const stringifyObject = require('stringify-object');

const collection = {
	supportedVersion: '6.2.0',
	component,
	grid,
	store
};

module.exports = stringifyObject(collection);