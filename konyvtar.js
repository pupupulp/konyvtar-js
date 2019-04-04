var Kony = { supportedVersion: '6.2.0' };

Kony.component = {
	/**
	 * * Sample Usage:
	 * * Kony.component.query('button[property = value]');
	 *
	 * @param {string} queryString
	 */
	query: function (queryString = '') {
		return Ext.ComponentQuery.query(queryString)[0];
	},
	/**
	 * * Sample Usage:
	 * * Kony.component.reference('button', 'button-reference-value');
	 *
	 * @param {string} component
	 * @param {string} reference
	 */
	reference: function (component = '', reference = '') {
		return Ext.ComponentQuery.query(`${component}[reference = ${reference}]`)[0];
	}
};

Kony.store = {
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

Kony.grid = {
	render: {
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.default();
		 */
		default: function () {
			return function (value) {
				return value;
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.qTip();
		 */
		qTip: function () {
			return function (value, meta) {
				meta.tdAttr = `data-qtip = "${value}"`;
				return value;
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.checkColumn();
		 */
		checkColumn: function () {
			return function (value, meta) {
				meta.tdAttr = `data-qtip = "${(value == 1 ? 'Yes' : 'No')}"`;

				var cssPrefix = Ext.baseCSSPrefix,
					cssClass = cssPrefix + 'grid-checkcolumn';

				if (value == 1) cssClass += ` ${cssPrefix} grid-checkcolumn-checked`;

				return `<div class="${cssClass}" role="button" tabIndex="0"></div>`;
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.yesNo();
		 */
		yesNo: function () {
			return function (value, meta) {
				return value == 1 ? 'Yes' : 'No';
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.currency();
		 */
		currency: function () {
			return function (value) {
				value = value ? value : 0;
				return Ext.util.Format.currency(value, ' ', 2, false);
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.accurate();
		 */
		accurate: function () {
			return function (value) {
				value = value ? value : 0;
				return Ext.util.Format.number(value, '0,0.00##########');
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.fullDate();
		 */
		fullDate: function () {
			return function (value) {
				return Ext.util.Format.date(value, 'F d, Y');
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.ymdDate();
		 */
		ymdDate: function () {
			return function (value) {
				return Ext.util.Format.date(value, 'Y-M-d');
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.dmyDate();
		 */
		dmyDate: function () {
			return function (value) {
				return Ext.util.Format.date(value, 'd-M-Y');
			};
		},
		/**
		 * * Sample Usage:
		 * * renderer: Kony.grid.render.mdyDate();
		 */
		mdyDate: function () {
			return function (value) {
				return Ext.util.Format.date(value, 'M-d-Y');
			};
		}
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.get('grid-reference-value');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('grid', reference);
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.setup('reference', 'url', { key: value });
	 *
	 * @param {string} reference
	 * @param {string} storeUrl
	 * @param {object} filters
	 */
	setup: function (reference = '', storeUrl = '', filters = {}) {
		var grid = Kony.component.reference('grid', reference),
			paging = grid.down('pagingtoolbar'),
			dataStore = Kony.store.create(storeUrl, filters, grid);

		grid.bindStore(dataStore);
		if (paging) paging.bindStore(dataStore);
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.clear('reference');
	 *
	 * @param {string} reference
	 */
	clear: function (reference = '') {
		var grid = Kony.component.reference('grid', reference),
			paging = grid.down('pagingtoolbar');

		if (!grid.getStore().blockLoadCounter) {
			grid.getStore().loadData([], false);
			if (paging) paging.bindStore([], false);
		}
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.getSelection('reference');
	 *
	 * @param {string} reference
	 */
	getSelection: function (reference = '') {
		return Kony.component.reference('grid', reference).getSelectionModel().getLastSelected();
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.clearSelection('reference');
	 *
	 * @param {string} reference
	 */
	clearSelection: function (reference = '') {
		var grid = Kony.component.reference('grid', reference);

		grid.getSelectionModel().deselectAll();
		grid.getSelectionModel().clearSelections();
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.getStore('reference');
	 *
	 * @param {string} reference
	 */
	getStore: function (reference = '') {
		return Kony.component.reference('grid', reference).getStore();
	},
	/**
	 * * Sample Usage:
	 * * Kony.grid.reload('reference');
	 *
	 * @param {string} reference
	 */
	reload: function (reference = '') {
		Kony.component.reference('grid', reference).getStore().load();
	}
};

Kony.combobox = {
	/**
	 * * Sample Usage:
	 * * Kony.combobox.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('combobox', reference);
	},
	/**
	 * * Sample Usage:
	 * * Kony.combobox.setup('reference', 'url', { key: value });
	 *
	 * @param {string} reference
	 * @param {string} storeUrl
	 * @param {object} filters
	 */
	setup: function (reference = '', storeUrl = '', filters = {}) {
		var combobox = Kony.component.reference('combobox', reference),
			store = Kony.store.create(storeUrl, filters, combobox);

		combobox.bindStore(store);
	},
	/**
	 * * Sample Usage: Kony.combobox.getRecordById('reference', 2);
	 *
	 * @param {string} reference
	 * @param {number} id
	 */
	getRecordById: function (reference = '', id = 0) {
		return Kony.component.reference('combobox', reference).findRecord('id', id);
	},
};

Kony.form = {
	/**
	 * * Sample Usage:
	 * * Kony.form.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('form', reference).getForm();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.getValues('reference');
	 *
	 * @param {string} reference
	 */
	getValues: function (reference = '') {
		return Kony.component.reference('form', reference).getValues();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.loadRecord('reference', []);
	 *
	 * @param {string} reference
	 * @param {array} record
	 */
	loadRecord: function (reference = '', record = []) {
		Kony.component.reference('form', reference).loadRecord(record);
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.setReadOnly('reference', true);
	 *
	 * @param {string} reference
	 * @param {boolean} isReadOnly
	 */
	setReadOnly: function (reference = '', isReadOnly = false) {
		Kony.component.reference('form', reference).getFields().each(function (field) {
			field.setReadOnly(isReadOnly);
		});
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.clear('reference');
	 *
	 * @param {string} reference
	 */
	clear: function (reference = '') {
		Kony.component.reference('form', reference).reset();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.isValid('reference');
	 *
	 * @param {string} reference
	 */
	isValid: function (reference = '') {
		Kony.component.reference('form', reference).isValid();
	},
	/**
	 * * Sample Usage:
	 * * Kony.form.getInvalidFields('reference');
	 *
	 * @param {string} reference
	 */
	getInvalidFields: function (reference = '') {
		var invalidFields = [];

		Ext.suspendLayouts();

		Kony.component.reference('form', reference).getFields().filterBy(function (field) {
			if (field.validate()) return;
			else {
				invalidFields.push(field.fieldLabel);
			}
		});

		Ext.resumeLayouts(true);

		return invalidFields;
	}
};

Kony.button = {
	/**
	 * * Sample Usage:
	 * * Kony.button.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Kony.component.reference('button', reference);
	},
	/**
	 * * Sample Usage:
	 * * Kony.button.disable('reference');
	 *
	 * @param {string} reference
	 */
	disable: function (reference = '') {
		Kony.component.reference('button', reference).setDisabled(true);
	},
	/**
	 * * Sample Usage:
	 * * Kony.button.enable('reference');
	 *
	 * @param {string} reference
	 */
	enable: function (reference = '') {
		Kony.component.reference('button', reference).setDisabled(false);
	}
};

Kony.render = {
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

Kony.ajax = {
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

Kony.url = {
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

Kony.task = {
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

Kony.window = {
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

Kony.message = {
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