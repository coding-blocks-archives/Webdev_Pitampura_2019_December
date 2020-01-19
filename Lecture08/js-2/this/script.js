function printThis () {
  console.log(this)
}

printThis()

let x = 100
let y = function () {return 10 }

let obj = {
  a: 10,
  b: 'asdsad',
  c: true,
  p: x,
  q: y,
  g: function () {
    printThis()
  },
  h: function () {
    function printThis2() {
      console.log(this)
    }
    return printThis2
  }
}
