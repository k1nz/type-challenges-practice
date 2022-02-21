type tuple = readonly (string | number | symbol)[]

type TupleToObject<T extends tuple> = {
  [P in T[number]]: P // resolution a
}

// keyof 可以获取数组的索引

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const without_typeof = [1, 2, 3, 4]

type test1 = TupleToObject<typeof tuple>
// type test2 = TupleToObject<[[1, 2], {}]> // error: type must be string/number/symbol

// js
function TupleToObject(tuple) {
  const res = {}
  if (tuple instanceof Array) {
    tuple.forEach((e) => {
      res[e] = e
    })
  }
  return res
}
