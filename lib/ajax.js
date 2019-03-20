const ajax = {
	/**
	 * * Sample Usage:
	 * * Kony.ajax.request('url', 'GET', { key: value }, function (){}, function (){}, false);
	 */
	request: function (url, method, params, sucessCallback, failureCallback, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: method,
			params: params,
			success: function (response) {
				callback(Ext.decode(reponse.responseText));
			},
			failure: function (response) {
				failureCallback();
			}
		});
	}
};

module.exports = ajax;