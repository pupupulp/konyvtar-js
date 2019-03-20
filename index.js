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
const store = require('./lib/store');
const grid = require('./lib/grid');
const combobox = require('./lib/combobox');
const form = require('./lib/form');

const stringifyObject = require('stringify-object');

let Kony = { supportedVersion: '6.2.0' };
Kony.component = component;
Kony.store = store;
Kony.grid = grid;
Kony.combobox = combobox;
Kony.form = form;

module.exports = stringifyObject(Kony);