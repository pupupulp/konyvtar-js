const render = {
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.default(value);
	 */
	default: function (value) {
		return value;
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.yesNo(value);
	 */
	yesNo: function (value) {
		return value == 1 ? 'Yes' : 'No';
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.currency(value);
	 */
	currency: function (value = 0) {
		return Ext.util.Format.currency(value, ' ', 2, false);
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.accurate(value);
	 */
	accurate: function (value = 0) {
		return Ext.util.Format.number(value, '0,0.00##########');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.fullDate(value);
	 */
	fullDate: function (value) {
		return Ext.util.Format.date(value, 'F d, Y');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.ymdDate(value);
	 */
	ymdDate: function (value) {
		return Ext.util.Format.date(value, 'Y-m-d');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.dmyDate(value);
	 */
	dmyDate: function (value) {
		return Ext.util.Format.date(value, 'd-m-Y');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.mdyDate(value);
	 */
	mdyDate: function (value) {
		return Ext.util.Format.date(value, 'm-d-Y');
	},
	/**
	 * * Sample Usage:
	 * * renderer: Kony.render.formatDate(value, 'YYYY');
	 */
	formatDate: function (value, format = 'm-d-Y') {
		return Ext.util.Format.date(value, format);
	}
};

module.exports = render;