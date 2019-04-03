const store = {
	/**
	 * * Sample Usage:
	 * * Kony.store.create('url', { key: value }, component, true, 25);
	 *
	 * @param {string} url
	 * @param {object} extraParams
	 * @param {string} component
	 * @param {boolean} autoLoad
	 * @param {number} pageSize
	 */
	create: function (url = '', extraParams = {}, component = '', autoLoad = true, pageSize = 25) {
		if (!url) return;

		return new Ext.data.Store({
			fields: [],
			proxy: {
				extraParams: extraParams,
				url: url,
				type: 'ajax',
				reader: {
					type: 'json',
					rootProperty: 'data',
					totalProperty: 'total'
				}
			},
			pageSize: pageSize,
			autoLoad: autoLoad,
			autoDestroy: true,
			listeners: {
				metachange: function (store, meta) {
					store.fields = meta.fields;
				},
				load: function (store, records, success) {
					var message = '<center>Failed to load store data.</center>';

					if (component != '') component.unmask();
					if (component != '' && !success) return component.mask(message);
					if (component == '') return;

					// if (store.getTotalCount() <= 0) return;
					// if (!Ext.Array.contains(store.getFields(), 'is_default')) return;
					// if (!Ext.isDefined(component.value)) return;

					// var index = store.findExact('is_default', '1');
					// if (index < 0) return;

					// var value = store.getAt(index).get('id');
					// component.setValue(value);
				}
			}
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.store.tree('url', { key: value }, component, true, true);
	 *
	 * @param {string} url
	 * @param {object} extraParams
	 * @param {string} component
	 * @param {boolean} autoLoad
	 * @param {boolean} folderSort
	 */
	tree: function (url = '', extraParams = {}, component = '', autoLoad = true, folderSort = true) {
		return new Ext.data.TreeStore({
			proxy: {
				extraParams: extraParams,
				url: url,
				type: 'ajax',
				reader: {
					type: 'json',
					root: 'children'
				}
			},
			root: {
				text: '.',
				expandable: false,
			},
			autoLoad: autoLoad,
			folderSort: folderSort,
			listeners: {
				load: function (store, records, success) {
					var message = '<center>Failed to load store data.</center>';

					if (component != '') component.unmask();
					if (component != '' && !success) return component.mask(message);
					if (component == '') return;
				}
			}
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.store.local([]);
	 *
	 * @param {array} records
	 */
	local: function (records = []) {
		var keys = Object.keys(records[0]);

		return Ext.create('Ext.data.Store', {
			fields: keys,
			data: records
		});
	},
};

module.exports = store;