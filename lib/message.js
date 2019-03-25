const message = {
	/**
	 * * Sample Usage:
	 * * Kony.message.custom('Test', 'test', Ext.Msg.YESNO, Ext.Msg.QUESTION, function (){});
	 *
	 * @param {string} title
	 * @param {string} message
	 * @param {class} btn
	 * @param {class} icon
	 * @param {function} callback
	 */
	custom: function (title, message, btn, icon, callback) {
		Ext.Msg.show({
			title: title,
			message: message,
			buttons: btn,
			icon: icon,
			fn: callback
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.message.alert('test');
	 *
	 * @param {string} message
	 */
	alert: function (message) {
		Ext.Msg.alert('System Response', message);
	},
	/**
	 * * Sample Usage:
	 * * Kony.message.confirm('test', function (){});
	 *
	 * @param {string} message
	 * @param {function} callback
	 */
	confirm: function (message, callback) {
		Ext.confirm('System Response', message, callback);
	},
	/**
	 * * Sample Usage:
	 * * Kony.message.error('test');
	 *
	 * @param {string} message
	 */
	error: function (message) {
		Ext.Msg.show({
			title: 'System Response',
			message: message,
			icon: Ext.Msg.ERROR,
			buttons: Ext.Msg.OK
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.message.info('test');
	 *
	 * @param {string} message
	 */
	info: function (message) {
		Ext.Msg.show({
			title: 'System Response',
			message: message,
			icon: Ext.Msg.INFO,
			buttons: Ext.Msg.OK
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.message.ask('test', function (){});
	 *
	 * @param {string} message
	 * @param {function} callback
	 */
	ask: function (message, callback) {
		Ext.Msg.show({
			title: 'System Response',
			message: message,
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			fn: callback
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.message.warn('test');
	 *
	 * @param {string} message
	 */
	warn: function (message) {
		Ext.Msg.show({
			title: 'System Response',
			message: message,
			icon: Ext.Msg.WARNING,
			buttons: Ext.Msg.OK
		});
	}
};

module.exports = message;