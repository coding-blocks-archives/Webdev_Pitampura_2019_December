function inner() {
    return "Name"
}

function outer(arg) {
    function greeter() {
        console.log("Greet" + arg())
    }

    return greeter
}

let greet = outer(inner)
greet()