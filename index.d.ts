export interface RegisterOptions {
  ignoreNodeModules: boolean
}

declare function register(options?: RegisterOptions): void

export default register
