let lib;
if(typeof window === 'undefined') {
    lib = require('./lib')
}else {
    lib = {add}
}

// console.log(lib)

console.log('The sum of 10 and 20 is ' + lib.add(10,20))
// console.log('The diff of 100 and 20 is ' + lib.subtract(100,20))