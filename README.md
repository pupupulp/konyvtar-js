# konyvtar-js

[![npm version](https://badgen.net/npm/v/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![npm downloads](https://badgen.net/npm/dm/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![node](https://badgen.net/npm/node/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![License](https://badgen.net/github/license/pupupulp/konvytar-js)](https://github.com/pupupulp/konyvtar-js/blob/master/LICENSE)

An opensource library/package of code wrappers for ExtJS 6.2.0 GPL

## Quickstart

### Installation

`$ npm install --save konyvtar-js`

### Usage:

`const kony = require('konyvter-js');`

### Example (Using express and express-es6-template-engine):

@app.js

```javascript
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const kony = require('konyvtar-js');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('template', {
        locals: {
            kony
        }
    });
});

app.listen(3000);
```

@template.html

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="/lib/extjs/ext-all.js"></script>
    <script type="text/javascript" src="/lib/extjs/classic/theme-triton/theme-triton.js"></script>
    <script type="text/javascript" src="/lib/extjs/packages/charts/classic/charts.js"></script>
    <script type="text/javascript" src="/lib/extjs/packages/ux/classic/ux.js"></script>
    <script type="text/javascript"> var Kony = ${kony}; </script>
</head>
<body>
</body>
</html>
```

### Running Tests

`$ npm test`

## Documentation

### Table of Contents

- [Component](#component)
- [Store](#store)
- [Grid](#grid)
- [Combobox](#combobox)
- [Form](#form)
- [Button](#button)
- [Render](#render)
- [Ajax](#ajax)
- [Url](#url)
- [Task](#task)
- [Window](#window)

### Features

#### Component

- **query**

```javascript
/**
 * * Sample Usage:
 * * Kony.component.query('button[property = value]');
 *
 * @param {string} queryString
 */
Kony.component.query(queryString);
```

- **reference**

```javascript
/**
 * * Sample Usage:
 * * Kony.component.reference('button', 'button-reference-value');
 *
 * @param {string} component
 * @param {string} reference
 */
Kony.component.reference(component, reference);
```

#### Store

- **create**

```javascript
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
Kony.store.create(url, extraParams, component, autoLoad, pageSize);
```

- **tree**

```javascript
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
Kony.store.tree(url, extraParams, component, autoLoad, folderSort);
```

- **local**

```javascript
/**
 * * Sample Usage:
 * * Kony.store.local([]);
 *
 * @param {array} records
 */
Kony.store.local(records);
```

#### Grid

- **render**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.default();
 */
Kony.grid.render.default();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.qTip();
 */
Kony.grid.render.qTip();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.checkColumn();
 */
Kony.grid.render.checkColumn();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.yesNo();
 */
Kony.grid.render.yesNo();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.currency();
 */
Kony.grid.render.currency();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.accurate();
 */
Kony.grid.render.accurate();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.fullDate();
 */
Kony.grid.render.fullDate();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.ymdDate();
 */
Kony.grid.render.ymdDate();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.dmyDate();
 */
Kony.grid.render.dmyDate();

/**
 * * Sample Usage:
 * * renderer: Kony.grid.render.mdyDate();
 */
Kony.grid.render.mdyDate();
```

- **get**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.get('grid-reference-value');
 *
 * @param {string} reference
 */
Kony.grid.get(reference);
```

- **setup**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.setup('reference', 'url', { key: value });
 *
 * @param {string} reference
 * @param {string} storeUrl
 * @param {object} filters
 */
Kony.grid.setup(reference, storeUrl, filters);
```

- **clear**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.clear('reference');
 *
 * @param {string} reference
 */
Kony.grid.clear(reference);
```

- **getSelection**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.getSelection('reference');
 *
 * @param {string} reference
 */
Kony.grid.getSelection(reference);
```

- **clearSelection**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.clearSelection('reference');
 *
 * @param {string} reference
 */
Kony.grid.clearSelection(reference);
```

- **getStore**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.getStore('reference');
 *
 * @param {string} reference
 */
Kony.grid.getStore(reference);
```

- **reload**

```javascript
/**
 * * Sample Usage:
 * * Kony.grid.reload('reference');
 *
 * @param {string} reference
 */
Kony.grid.reload(reference);
```

#### Combobox

- **get**

```javascript
/**
 * * Sample Usage:
 * * Kony.combobox.get('reference');
 *
 * @param {string} reference
 */
Kony.combobox.get(reference);
```

- **setup**

```javascript
/**
 * * Sample Usage:
 * * Kony.combobox.setup('reference', 'url', { key: value });
 *
 * @param {string} reference
 * @param {string} storeUrl
 * @param {object} filters
 */
Kony.combobox.setup(reference, storeUrl, filters);
```

- **getRecordById**

```javascript
/**
 * * Sample Usage: Kony.combobox.getRecordById('reference', 2);
 *
 * @param {string} reference
 * @param {number} id
 */
Kony.combobox.getRecordById(reference, id);
```

#### Form

- **get**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.get('reference');
 *
 * @param {string} reference
 */
Kony.form.get(reference);
```

- **getValues**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.getValues('reference');
 *
 * @param {string} reference
 */
Kony.form.getValues(reference);
```

- **loadRecord**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.loadRecord('reference', []);
 *
 * @param {string} reference
 * @param {array} record
 */
Kony.form.loadRecord(reference, record);
```

- **setReadOnly**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.setReadOnly('reference', true);
 *
 * @param {string} reference
 * @param {boolean} isReadOnly
 */
Kony.form.setReadOnly(reference, isReadOnly);
```

- **clear**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.clear('reference');
 *
 * @param {string} reference
 */
Kony.form.clear(reference);
```

- **isValid**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.isValid('reference');
 *
 * @param {string} reference
 */
Kony.form.isValid(reference);
```

- **getInvalidFields**

```javascript
/**
 * * Sample Usage:
 * * Kony.form.getInvalidFields('reference');
 *
 * @param {string} reference
 */
Kony.form.getInvalidFields(reference);
```

#### Button

- **get**

```javascript
/**
 * * Sample Usage:
 * * Kony.button.get('reference');
 *
 * @param {string} reference
 */
Kony.button.get(reference);
```

- **disable**

```javascript
/**
 * * Sample Usage:
 * * Kony.button.disable('reference');
 *
 * @param {string} reference
 */
Kony.button.disable(reference);
```

- **enable**

```javascript
/**
 * * Sample Usage:
 * * Kony.button.enable('reference');
 *
 * @param {string} reference
 */
Kony.button.enable(reference);
```

#### Render

- **default**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.default(value);
 *
 * @param {*} value
 */
Kony.render.default(value);
```

- **yesNo**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.yesNo(value);
 *
 * @param {number} value
 */
Kony.render.yesNo(value);
```

- **currency**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.currency(value);
 *
 * @param {number} value
 */
Kony.render.currency(value);
```

- **accurate**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.accurate(value);
 *
 * @param {number} value
 */
Kony.render.accurate(value);
```

- **fullDate**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.fullDate(value);
 *
 * @param {string|date} value
 */
Kony.render.fullDate(value);
```

- **ymdDate**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.ymdDate(value);
 *
 * @param {string|date} value
 */
Kony.render.ymdDate(value);
```

- **dmyDate**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.dmyDate(value);
 *
 * @param {string|date} value
 */
Kony.render.dmyDate(value);
```

- **mdyDate**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.mdyDate(value);
 *
 * @param {string|date} value
 */
Kony.render.mdyDate(value);
```

- **formatDate**

```javascript
/**
 * * Sample Usage:
 * * renderer: Kony.render.formatDate(value, 'YYYY');
 *
 * @param {string|date} value
 * @param {string} format
 */
Kony.render.formatDate(value, format);
```

#### Ajax

- **request**

```javascript
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
Kony.ajax.request(url, method, params, sucessCallback, failureCallback, async);
```

#### Url

- **convertObjectToQuery**

```javascript
/**
 * * Sample Usage:
 * * Kony.url.convertObjectToQuery({ key: value });
 *
 * @param {object} params
 */
Kony.url.convertObjectToQuery(params);
```

#### Task

- **create**

```javascript
/**
 * * Sample Usage:
 * * Kony.task.create(function (){});
 *
 * @param {function} callback
 */
Kony.task.create(callback);
```

#### Window

- **getHeight**

```javascript
/**
 * * Sample Usage:
 * * Kony.window.getHeight();
 */
Kony.window.getHeight();
```

- **getWidth**

```javascript
/**
 * * Sample Usage:
 * * Kony.window.getWidth();
 */
Kony.window.getWidth();
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/pupupulp/konyvtar-js/issues/new).

### Related Projects

You might want to checkout these projects:

- [NchikotaJS](https://github.com/pupupulp/nchikota-js) - An opensource tech stack composed of ExpressJS, NodeJS, ExtJS.

### Base Contributors

- [Alfonse Dumadapat](https://github.com/papipons)
- [Alona Ponce]()
- [Jeff Canale](https://github.com/je-poy)
- [Rey Anthony Paano](https://github.com/reypaano)

### Contributors

### Author

**Eagan Martin**
- [Github](https://github.com/pupupulp)
- [LinkedIn]()

### License

Copyright © 2019, [Eagan Martin](https://github.com/pupupulp). Release under the [GPL-3.0 License](https://github.com/pupupulp/konyvtar-js/blob/master/README.md)