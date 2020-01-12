window.onload = function () {
    let list = document.getElementById('list')
    let btn = document.getElementById('btn')
    let number = document.getElementById('number')

    // btn.onclick = function () {
    //     let start = new Date().getTime()
    //     let n = parseInt(number.value)
    //     let listContent = ''

    //     for (let i = 1; i <= n; i++) {
    //         let print = ''
    //         if (i % 3 == 0) print += 'fizz'
    //         if (i % 5 == 0) print += 'buzz'
    //         if (print == '') print += i

    //         listContent += `<li>${print}</li>`
    //     }
    //     list.innerHTML = listContent
    //     let end = new Date().getTime()

    //     console.log(end - start)
    // }

    btn.onclick = function () {
        let start = new Date().getTime()
        let n = parseInt(number.value)

        for (let i = 1; i <= n; i++) {
            let print = ''
            if (i % 3 == 0) print += 'fizz'
            if (i % 5 == 0) print += 'buzz'
            if (print == '') print = i

            let item = document.createElement('li')
            item.innerText = print

            list.appendChild(item)
        }

        let end = new Date().getTime()

        console.log(end - start)
    }
}