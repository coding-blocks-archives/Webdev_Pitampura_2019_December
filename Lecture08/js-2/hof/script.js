function greeterGenerator(greeting) {
  function createGreeter(name) {
    function greet() {
      console.log(greeting + name)
    }

    return greet
  }

  return createGreeter
}

let helloGreeter = greeterGenerator('Hello ')
let welcomeGreeter = greeterGenerator('Welcome ')

let greet1 = helloGreeter('John')
let greet2 = helloGreeter('Jane')
let greet3 = welcomeGreeter('John')
let greet4 = welcomeGreeter('Jane')
