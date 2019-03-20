/**
 * ! Dependencies:
 * ! Kony.component
 */

const button = {
	/**
	 * * Sample Usage:
	 * * Kony.button.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('button', reference);
	},
	/**
	 * * Sample Usage:
	 * * Kony.button.disable('reference');
	 *
	 * @param {string} reference
	 */
	disable: function (reference = '') {
		Kony.component.reference('button', reference).setDisabled(true);
	},
	/**
	 * * Sample Usage:
	 * * Kony.button.enable('reference');
	 *
	 * @param {string} reference
	 */
	enable: function (reference = '') {
		Kony.component.reference('button', reference).setDisabled(false);
	}
};

module.exports = button;