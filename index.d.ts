export interface RegisterOptions {
  ignoreNodeModules: boolean = true;
}

declare function register(options?: RegisterOptions): void

export default register
