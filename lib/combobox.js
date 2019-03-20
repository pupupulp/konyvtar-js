/**
 * ! Dependencies:
 * ! Kony.component
 * ! Kony.store
 */

const combobox = {
	/**
	 * * Sample Usage:
	 * * Kony.combobox.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('combobox', reference);
	},
	/**
	 * * Sample Usage:
	 * * Kony.combobox.setup('reference', 'url', { key: value });
	 *
	 * @param {string} reference
	 * @param {string} storeUrl
	 * @param {object} filters
	 */
	setup: function (reference = '', storeUrl = '', filters = {}) {
		var combobox = Kony.component.reference('combobox', reference),
			store = Kony.store.create(storeUrl, filters, combobox);

		combobox.bindStore(store);
	},
	/**
	 * * Sample Usage: Kony.combobox.getRecordById('reference', 2);
	 *
	 * @param {string} reference
	 * @param {number} id
	 */
	getRecordById: function (reference = '', id = 0) {
		return Kony.component.reference('combobox', reference).findRecord('id', id);
	},
};

module.exports = combobox;