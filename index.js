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

module.exports = {
	supportedVersion: '6.2.0',
	component: {
		...component
	},
	grid,
	store
};