type MyExclude<T, E> = T extends E ? never : T

function exclude(type: any[], excludeItem: typeof type) {
  return type.filter((e) => excludeItem.includes(e))
}
