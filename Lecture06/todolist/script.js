window.onload = function () {
    let item = document.getElementById('item')
    let list = document.getElementById('list')
    let btn = document.getElementById('btn')

    function addNewTask() {
        let newItem = document.createElement('li')
        newItem.innerText = item.value
        list.appendChild(newItem)
    }
    btn.onclick = function () {
        addNewTask()
    }

    item.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            addNewTask()
        }
    })

}

//https://2ality.com/2012/01/object-plus-object.html