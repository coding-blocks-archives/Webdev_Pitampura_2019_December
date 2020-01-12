window.onload = function () {
    let list = document.getElementById('list')
    let btn = document.getElementById('btn')
    let number = document.getElementById('number')

    btn.onclick = function () {
        let n = parseInt(number.value)
        let listContent = ''

        for (let i = 1; i <= n; i++) {
            let print = ''
            if (i % 3 == 0) print += 'fizz'
            if (i % 5 == 0) print += 'buzz'
            if (print == '') print += i

            listContent += `<li>${print}</li>`
        }
        list.innerHTML = listContent
    }
}