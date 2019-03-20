/**
 * ! Dependencies:
 * ! Kony.component
 * ! Kony.store
 */

const combobox = {
	/**
	 * * Sample Usage:
	 * * Kony.combobox.get('reference');
	 */
	get: function (reference) {
		return Kony.component.reference('combobox', reference);
	},
	/**
	 * * Sample Usage:
	 * * Kony.combobox.setup('reference', 'url', { key: value });
	 */
	setup: function (reference, storeUrl, filters = {}) {
		var combobox = Kony.component.reference('combobox', reference),
			store = Kony.store.create(storeUrl, filters, combobox);

		combobox.bindStore(store);
	},
	/**
	 * * Sample Usage: Kony.combobox.getRecordById('reference', 2);
	 */
	getRecordById: function (reference, id) {
		return Kony.component.reference('combobox', reference).findRecord('id', id);
	},
};

module.exports = combobox;