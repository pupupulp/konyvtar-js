const stringify = require('./stringify');

const component = {
	/**
	 * * Sample Usage:
	 * * Kony.component.query('button[property = value]');
	 */
	query: stringify(function (queryString) {
		return Ext.ComponentQuery.query(queryString)[0];
	}),
	/**
	 * * Sample Usage:
	 * * Kony.component.reference('button', 'button-reference-value');
	 */
	reference: stringify(function (component, reference) {
		return Ext.ComponentQuery.query(`${component}[reference = ${reference}]`)[0];
	})
};

module.exports = component;