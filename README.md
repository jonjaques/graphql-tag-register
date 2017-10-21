# graphql-tag-loader-register

Require `.graphql` files with Node & Typescript.

You may want to add `"ignore": [".graphql", ".graphqls"]` to your .babelrc if you use babel@6. I hear that babel@7 fixes this by using the same dependency this module does ;)

*Supports node@>=6*

## Usage

### Install

```
npm i --save graphql graphql-tag graphql-tag-loader-register
```

### Code

```js
const register = require('graphql-tag-loader-register')
register()

const schema = require('./schema.graphqls')
console.log(schema) // schema document ast

const query = require('./query.graphql')
console.log(query) // schema document ast
```

Also supports ES6 imports and TypeScript with a default export.

```ts
import register from 'graphql-tag-register'
register()
```

If using TypeScript, you'll want to add these declarations to your types file.

```ts
declare module '*.graphql' {
  import {DocumentNode} from 'graphql';
  const value: DocumentNode;
  export = value;
}

declare module '*.graphqls' {
  import {DocumentNode} from 'graphql';
  const value: DocumentNode;
  export = value;
}
```

> If somebody can improve the module by figuring out how to declare this globally or more succinctly, please do!