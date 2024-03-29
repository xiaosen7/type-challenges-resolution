type MutableKeys<T, K extends keyof T = keyof T> = K extends keyof T
  ? MyEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K
  : never;
