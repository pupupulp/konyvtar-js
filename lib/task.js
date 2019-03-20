const task = {
	/**
	 * * Sample Usage:
	 * * Kony.task.create(function (){});
	 *
	 * @param {function} callback
	 */
	create: function (callback = null) {
		return new Ext.util.DelayedTask(callback);
	}
};

module.exports = task;