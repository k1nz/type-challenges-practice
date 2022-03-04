import { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

type test2 = Includes<[boolean, 1, 2, 3, 4], true> // expected: false
type test3 = Includes<[1, 2, 3, 4], 1> // expected: true
