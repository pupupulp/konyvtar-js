const url = {
	/**
	 * * Sample Usage:
	 * * Kony.url.convertObjectToQuery({ key: value });
	 *
	 * @param {object} params
	 */
	convertObjectToQuery: function (params = {}) {
		var query = '';

		Ext.object.each(params, function (key, value) {
			query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
		});

		return query;
	}
};

module.exports = url;