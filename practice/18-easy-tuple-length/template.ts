type Tuple = readonly (number | string | symbol)[]
type Length<T extends Tuple> = T['length']

const getLength = (arr: Tuple) => {
  return arr.length
}
