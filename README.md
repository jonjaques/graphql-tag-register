# graphql-tag-loader-register

Require `.graphql` files with Node & Typescript.

You may want to add `"ignore": [".graphql", ".graphqls"]` to your .babelrc if you use babel@6. I hear that babel@7 fixes this by using the same dependency this module does ;)

*Supports node@>=6*

## Usage

### Install

```
npm i --save graphql graphql-tag graphql-tag-loader-register [@types/graphql]
```

### Code

```js
const register = require('graphql-tag-loader-register')
register()

const schema = require('./schema.graphqls')
console.log(schema) // schema document ast

const query = require('./query.graphql')
console.log(query) // query document ast
```

Also supports ES6 imports and TypeScript with a default export.

```ts
import register from 'graphql-tag-register'
register()
```

If using TypeScript, slightly more work is required. My only use case right now involves ts-node, and to get that to work I did the following:

```ts
// entry.js
process.env.TS_NODE_IGNORE = '\.graphqls?$'
require('ts-node/register')

// graphql.ts
import register from 'graphql-tag-loader-register'
register()

import {DocumentNode} from 'graphql'
const schema = require('schema.graphqls') as DocumentNode
const query = require('schema.graphql') as DocumentNode
```

> If somebody can improve the module by contributing working configs or figuring out how to declare this globally or more succinctly, please do!