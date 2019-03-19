module.exports = {
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
};