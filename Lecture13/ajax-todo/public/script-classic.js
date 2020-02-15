window.onload = function () {
    let btnLoad = document.getElementById('load')
    btnLoad.onclick = function () {
        let req = new XMLHttpRequest();
        req.addEventListener('load', (event) => {
            console.log(JSON.parse(req.response))
        })
        req.open('GET', '/todos')
        req.send()
    }
}