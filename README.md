# konyvtar-js

[![npm version](https://badgen.net/npm/v/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![npm downloads](https://badgen.net/npm/dw/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![npm downloads](https://badgen.net/npm/dm/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![npm downloads](https://badgen.net/npm/dy/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![npm downloads](https://badgen.net/npm/dt/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
[![node](https://badgen.net/npm/node/konyvtar-js)](https://www.npmjs.com/package/konyvtar-js)
![contributors](https://badgen.net/github/contributors/pupupulp/konyvtar-js)
![stars](https://badgen.net/github/stars/pupupulp/konyvtar-js)
![commits](https://badgen.net/github/commits/pupupulp/konyvtar-js)
![last commit](https://badgen.net/github/last-commit/pupupulp/konyvtar-js)
[![License](https://badgen.net/github/license/pupupulp/konyvtar-js)](https://github.com/pupupulp/konyvtar-js/blob/master/LICENSE)

An opensource library/package of code wrappers for ExtJS 6.2.0 GPL

## Quickstart

### Installation

`$ npm install --save konyvtar-js`

### Usage (NPM):

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

### Usage (Single File):

@template.html

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="/lib/extjs/ext-all.js"></script>
    <script type="text/javascript" src="/lib/extjs/classic/theme-triton/theme-triton.js"></script>
    <script type="text/javascript" src="/lib/extjs/packages/charts/classic/charts.js"></script>
    <script type="text/javascript" src="/lib/extjs/packages/ux/classic/ux.js"></script>
    <script type="text/javascript" src="/path/to/konyvtar.js</script>
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
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Kony.component.query('button[reference = sample-button]');
 *
 * @param {string} queryString
 */
Kony.component.query(queryString);
```

- **reference**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Kony.component.reference('button', 'sample-button');
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
 *
 * * @Controller
 * * Kony.store.create('/users', { active: true }, grid, true, 25);
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
 *
 * * @Controller
 * * Kony.store.tree('/menus', { userId: 2 }, grid, true, true);
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
 *
 * * @Controller
 * * var employees = [
 * *    { name: 'John Doe' },
 * *    { name: 'Jane Doe' }
 * * ];
 * * Kony.store.local(employees);
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
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Name', renderer: Kony.grid.render.default() }
 * *    ]
 * * }
 */
Kony.grid.render.default();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Name', renderer: Kony.grid.render.qTip() }
 * *    ]
 * * }
 */
Kony.grid.render.qTip();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Is Active', renderer: Kony.grid.render.checkColumn() }
 * *    ]
 * * }
 */
Kony.grid.render.checkColumn();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Is Active', renderer: Kony.grid.render.yesNo() }
 * *    ]
 * * }
 */
Kony.grid.render.yesNo();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Loan Balance', renderer: Kony.grid.render.currency() }
 * *    ]
 * * }
 */
Kony.grid.render.currency();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Installment Flat Rate', renderer: Kony.grid.render.accurate() }
 * *    ]
 * * }
 */
Kony.grid.render.accurate();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Birthday', renderer: Kony.grid.render.fullDate() }
 * *    ]
 * * }
 */
Kony.grid.render.fullDate();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Birthday', renderer: Kony.grid.render.ymdDate() }
 * *    ]
 * * }
 */
Kony.grid.render.ymdDate();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Birthday', renderer: Kony.grid.render.dmyDate() }
 * *    ]
 * * }
 */
Kony.grid.render.dmyDate();

/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    columns: [
 * *        { text: 'Birthday', renderer: Kony.grid.render.mdyDate() }
 * *    ]
 * * }
 */
Kony.grid.render.mdyDate();
```

- **get**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-grid'
 * * }
 *
 * * @Controller
 * * Kony.grid.get('sample-grid');
 *
 * @param {string} reference
 */
Kony.grid.get(reference);
```

- **setup**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Kony.grid.setup('sample-button', '/users', { active: true });
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
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-grid'
 * * }
 *
 * * @Controller
 * * Kony.grid.clear('sample-grid');
 *
 * @param {string} reference
 */
Kony.grid.clear(reference);
```

- **getSelection**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-grid'
 * * }
 *
 * * @Controller
 * * Kony.grid.getSelection('sample-grid');
 *
 * @param {string} reference
 */
Kony.grid.getSelection(reference);
```

- **clearSelection**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-grid'
 * * }
 *
 * * @Controller
 * * Kony.grid.clearSelection('sample-grid');
 *
 * @param {string} reference
 */
Kony.grid.clearSelection(reference);
```

- **getStore**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-grid'
 * * }
 *
 * * @Controller
 * * Kony.grid.getStore('sample-grid');
 *
 * @param {string} reference
 */
Kony.grid.getStore(reference);
```

- **reload**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'grid',
 * *    reference: 'sample-grid'
 * * }
 *
 * * @Controller
 * * Kony.grid.reload('sample-grid');
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
 *
 * * @View
 * * {
 * *    xtype: 'combobox',
 * *    reference: 'sample-combobox'
 * * }
 *
 * * @Controller
 * * Kony.combobox.get('sample-combobox');
 *
 * @param {string} reference
 */
Kony.combobox.get(reference);
```

- **setup**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'combobox',
 * *    reference: 'sample-combobox'
 * * }
 *
 * * @Controller
 * * Kony.combobox.setup('sample-combobox', '/contries', { region: southeast });
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
 *
 * * @View
 * * {
 * *    xtype: 'combobox',
 * *    reference: 'sample-combobox'
 * * }
 *
 * * @Controller
 * * Sample Usage: Kony.combobox.getRecordById('sample-combobox', 2);
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
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * Kony.form.get('sample-form');
 *
 * @param {string} reference
 */
Kony.form.get(reference);
```

- **getValues**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * Kony.form.getValues('sample-form');
 *
 * @param {string} reference
 */
Kony.form.getValues(reference);
```

- **loadRecord**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * var employee = {
 * *    data: { name: 'John Doe' }
 * * };
 * * Kony.form.loadRecord('sample-form', employee);
 *
 * @param {string} reference
 * @param {object} record
 */
Kony.form.loadRecord(reference, record);
```

- **setReadOnly**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * Kony.form.setReadOnly('sample-form', true);
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
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * Kony.form.clear('sample-form');
 *
 * @param {string} reference
 */
Kony.form.clear(reference);
```

- **isValid**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * Kony.form.isValid('sample-form');
 *
 * @param {string} reference
 */
Kony.form.isValid(reference);
```

- **getInvalidFields**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'form',
 * *    reference: 'sample-form'
 * * }
 *
 * * @Controller
 * * Kony.form.getInvalidFields('sample-form');
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
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Kony.button.get('sample-button');
 *
 * @param {string} reference
 */
Kony.button.get(reference);
```

- **disable**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Kony.button.disable('sample-button');
 *
 * @param {string} reference
 */
Kony.button.disable(reference);
```

- **enable**

```javascript
/**
 * * Sample Usage:
 *
 * * @View
 * * {
 * *    xtype: 'button',
 * *    reference: 'sample-button'
 * * }
 *
 * * @Controller
 * * Kony.button.enable('sample-button');
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
 *
 * * @Controller
 * * Kony.ajax.request('/login', 'POST', { user: john, pass: doe }, function (){}, function (){}, false);
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
 *
 * * @Controller
 * * Kony.url.convertObjectToQuery({ user: john, pass: doe });
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
 *
 * * @Controller
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
 *
 * * @Controller
 * * Kony.window.getHeight();
 */
Kony.window.getHeight();
```

- **getWidth**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.window.getWidth();
 */
Kony.window.getWidth();
```

#### Message

- **custom**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.custom('Test', 'test', Ext.Msg.YESNO, Ext.Msg.QUESTION, function (){});
 *
 * @param {string} title
 * @param {string} message
 * @param {class} btn
 * @param {class} icon
 * @param {function} callback
 */
Kony.message.custom(title, message, btn, icon, callback);
```

- **alert**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.alert('test');
 *
 * @param {string} message
 */
Kony.message.alert(message);
```

- **confirm**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.confirm('test', function (){});
 *
 * @param {string} message
 * @param {function} callback
 */
Kony.message.confirm(message, callback);
```

- **error**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.error('test');
 *
 * @param {string} message
 */
Kony.message.error(message);
```

- **info**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.info('test');
 *
 * @param {string} message
 */
Kony.message.info(message);
```

- **ask*

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.ask('test', function (){});
 *
 * @param {string} message
 * @param {function} callback
 */
Kony.message.ask(message, callback);
```

- **warn**

```javascript
/**
 * * Sample Usage:
 *
 * * @Controller
 * * Kony.message.warn('test');
 *
 * @param {string} message
 */
Kony.message.warn(message);
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/pupupulp/konyvtar-js/issues/new).

### Related Projects

You might want to checkout these projects:

- [NchikotaJS](https://github.com/pupupulp/nchikota-js) - An opensource tech stack composed of ExpressJS, NodeJS, ExtJS.
- [PasserelleJS](https://github.com/pupupulp/passerelle-js) - An opensource API gateway built with ExpressJS.

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

Copyright © 2019, [Eagan Martin](https://github.com/pupupulp). Release under the [GPL-3.0 License](https://github.com/pupupulp/konyvtar-js/blob/master/LICENSE)