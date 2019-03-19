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

module.exports = {
	component: {
		/**
		 * * Sample Usage:
		 * * Kony.component.query('button[property = value]');
		 */
		query: (queryString) => {
			return Ext.ComponentQuery.query(queryString)[0];
		},
		/**
		 * * Sample Usage:
		 * * Kony.component.reference('button', 'button-reference-value');
		 */
		reference: (component, reference) => {
			return Ext.ComponentQuery.query(`${component}[reference = ${reference}]`)[0];
		}
	},
};