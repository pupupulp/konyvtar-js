/**
 * ! Dependencies:
 * ! Kony.component
 * ! Kony.store
 */

const grid = {
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

module.exports = grid;