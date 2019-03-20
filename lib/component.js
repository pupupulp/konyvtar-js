const component = {
	/**
	 * * Sample Usage:
	 * * Kony.component.query('button[property = value]');
	 *
	 * @param {string} queryString
	 */
	query: function (queryString = '') {
		return Ext.ComponentQuery.query(queryString)[0];
	},
	/**
	 * * Sample Usage:
	 * * Kony.component.reference('button', 'button-reference-value');
	 *
	 * @param {string} component
	 * @param {string} reference
	 */
	reference: function (component = '', reference = '') {
		return Ext.ComponentQuery.query(`${component}[reference = ${reference}]`)[0];
	}
};

module.exports = component;