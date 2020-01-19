function increment(a, b) {
  a[0] = a[0]+1
  b[0] = b[0]+1
}

let x = [10]
let y = [11]

increment(x, y)

console.log(x)
console.log(y)
