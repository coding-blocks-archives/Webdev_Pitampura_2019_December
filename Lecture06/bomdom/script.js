console.log("hello")

window.onload = function () {
    let name = document.getElementById('name')
    let greet = document.getElementById('greet')
    let para = document.getElementById('para')

    greet.onclick = function () {
        let a = document.createElement('a')
        a.setAttribute('href', 'https://codingblocks.com')
        a.innerHTML = 'Coding Blocks'
        para.appendChild(a)
    }

    // console.log(name)
    console.log(name.value)
}