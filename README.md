# konyvtar-js
An opensource library/package of code wrappers for ExtJS 6.2.0 GPL

## Documentation

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