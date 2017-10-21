# graphql-tag-register

Require `.graphql` files with Node & Typescript.

You may want to add `"ignore": [".graphql", ".graphqls"]` to your .babelrc if you use babel@6. I hear that 

*Supports node@>=6*

## Usage

index.js
```js
const register = require('graphql-tag-register')
register()

const schema = require('./schema.graphqls')
console.log(schema) // schema document ast

const query = require('./query.graphql')
console.log(query) // schema document ast
```

Also supports ES6 imports and Typescript with a default export

```ts
import register from 'graphql-tag-register'
register()
```