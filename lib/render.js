const render = {
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.default(value);
	 *
	 * @param {*} value
	 */
	default: function (value) {
		return value;
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.yesNo(value);
	 *
	 * @param {number} value
	 */
	yesNo: function (value = 0) {
		return value == 1 ? 'Yes' : 'No';
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.currency(value);
	 *
	 * @param {number} value
	 */
	currency: function (value = 0) {
		return Ext.util.Format.currency(value, ' ', 2, false);
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.accurate(value);
	 *
	 * @param {number} value
	 */
	accurate: function (value = 0) {
		return Ext.util.Format.number(value, '0,0.00##########');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.fullDate(value);
	 *
	 * @param {string|date} value
	 */
	fullDate: function (value = '') {
		return Ext.util.Format.date(value, 'F d, Y');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.ymdDate(value);
	 *
	 * @param {string|date} value
	 */
	ymdDate: function (value = '') {
		return Ext.util.Format.date(value, 'Y-m-d');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.dmyDate(value);
	 *
	 * @param {string|date} value
	 */
	dmyDate: function (value = '') {
		return Ext.util.Format.date(value, 'd-m-Y');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.mdyDate(value);
	 *
	 * @param {string|date} value
	 */
	mdyDate: function (value = '') {
		return Ext.util.Format.date(value, 'm-d-Y');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.formatDate(value, 'YYYY');
	 *
	 * @param {string|date} value
	 * @param {string} format
	 */
	formatDate: function (value = '', format = 'm-d-Y') {
		return Ext.util.Format.date(value, format);
	}
};

module.exports = render;