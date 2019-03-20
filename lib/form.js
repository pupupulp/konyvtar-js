/**
 * ! Dependencies:
 * ! Kony.component
 */

const form = {
	/**
	 * * Sample Usage:
	 * * Kony.form.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('form', reference).getForm();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.getValues('reference');
	 *
	 * @param {string} reference
	 */
	getValues: function (reference = '') {
		return Kony.component.reference('form', reference).getValues();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.loadRecord('reference', []);
	 *
	 * @param {string} reference
	 * @param {array} record
	 */
	loadRecord: function (reference = '', record = []) {
		Kony.component.reference('form', reference).loadRecord(record);
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.setReadOnly('reference', true);
	 *
	 * @param {string} reference
	 * @param {boolean} isReadOnly
	 */
	setReadOnly: function (reference = '', isReadOnly = false) {
		Kony.component.reference('form', reference).getFields().each(function (field) {
			field.setReadOnly(isReadOnly);
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.clear('reference');
	 *
	 * @param {string} reference
	 */
	clear: function (reference = '') {
		Kony.component.reference('form', reference).reset();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.isValid('reference');
	 *
	 * @param {string} reference
	 */
	isValid: function (reference = '') {
		Kony.component.reference('form', reference).isValid();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.getInvalidFields('reference');
	 *
	 * @param {string} reference
	 */
	getInvalidFields: function (reference = '') {
		var invalidFields = [];

		Ext.suspendLayouts();

		Kony.component.reference('form', reference).getFields().filterBy(function (field) {
			if (field.validate()) return;
			else {
				invalidFields.push(field.fieldLabel);
			}
		});

		Ext.resumeLayouts(true);

		return invalidFields;
	}
};

module.exports = form;