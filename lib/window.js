const window = {
	/**
	 * * Sample Usage:
	 * * Kony.window.getHeight();
	 */
	getHeight: function () {
		return Ext.getBody().getViewSize().height;
	},
	/**
	 * * Sample Usage:
	 * * Kony.window.getWidth();
	 */
	getWidth: function () {
		return Ext.getBody().getViewSize().width;
	}
};

module.exports = window;