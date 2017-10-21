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

export interface RegisterOptions {
  ignoreNodeModules: boolean = true;
}

declare function register(opts: RegisterOptions): void

export default register
