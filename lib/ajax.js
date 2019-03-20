const ajax = {
	/**
	 * * Sample Usage:
	 * * Kony.ajax.request('url', 'GET', { key: value }, function (){}, function (){}, false);
	 *
	 * @param {string} url
	 * @param {string} method
	 * @param {object} params
	 * @param {function} sucessCallback
	 * @param {function} failureCallback
	 * @param {boolean} async
	 */
	request: function (url = '', method = '', params = {}, sucessCallback = null, failureCallback = null, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: method,
			params: params,
			success: function (response) {
				sucessCallback(Ext.decode(response.responseText));
			},
			failure: function (response) {
				failureCallback(Ext.decode(response.responseText));
			}
		});
	}
};

module.exports = ajax;