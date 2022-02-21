type GetRequired<T> = {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K]
}

type GetRequired2<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

type TestType1 = { a: string; b?: string }
interface TestType2 {
  a: string
  b?: string
}
type t1 = keyof GetRequired<{ a: string; b?: string }> // 'a'
type t2 = keyof GetRequired2<{ a: string; b?: string }> // 'a'
type t3 = keyof GetRequired<TestType1> // 'a'
type t4 = keyof GetRequired2<TestType1> // 'a'
type t5 = keyof GetRequired<TestType2> // 'a'
type t6 = keyof GetRequired2<TestType2> // 'a'
type t7 = GetRequired<{ a: string; b?: string }> extends { b: string }
  ? true
  : false // false
type t8 = GetRequired2<{ a: string; b?: string }> extends { b: string }
  ? true
  : false // false
