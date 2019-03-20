const task = {
	/**
	 * * Sample Usage:
	 * * Kony.task.create(function (){});
	 */
	create: function (callback) {
		return new Ext.util.DelayedTask(callback);
	}
};

module.exports = task;