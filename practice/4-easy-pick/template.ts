type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// js
const JS_MyPick = (data, keys) => {
  const res = {}
  keys.forEach((key) => {
    if(key in data) {
      res[key] = data[key]
    }
  })
  return res
} 

// 1. 创建一个对象
// 2. 遍历需要Pick的元素
// 3. 判断key是否在目标对象中
// 4. 给结果对象赋值data[key]