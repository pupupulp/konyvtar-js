# konyvtar-js
An opensource library/package of code wrappers for ExtJS 6.2.0 GPL

## Upcoming Functional Updates:
- Combobox
- Form
- Button
- Render
- Ajax
- Url
- Task
- Window

## Documentation: coming soon

## Usage:

@RouterJS
`const kony = require('konyvtar-js');`
* using template engines, pass `kony` to template

* sample using express-es6-template-engine
`const kony = require('konyvtar-js');`
`res.render('main', { locals: { kony } });`

@Template
- put this script after loading of extjs in template
`<script type="text/javascript"> var Kony = ${placeholder}; </script>`

* sample using express-es6-template-engine
`<script type="text/javascript" src="/lib/extjs/ext-all.js"></script>`
`<script type="text/javascript" src="/lib/extjs/classic/theme-triton/theme-triton.js"></script>`
`<script type="text/javascript" src="/lib/extjs/packages/charts/classic/charts.js"></script>`
`<script type="text/javascript" src="/lib/extjs/packages/ux/classic/ux.js"></script>`
`<script type="text/javascript"> var Kony = ${kony}; </script>`
