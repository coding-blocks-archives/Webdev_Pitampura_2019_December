let tasklist = []

window.onload = function() {
  function refreshList() {
    list.innerHTML = ''
    for (let task of tasklist) {
      let newItem = document.createElement('li')
      newItem.className = ''
      newItem.innerText = task
      list.appendChild(newItem)
    }
  }

  function addNewTask() {
    tasklist.push(item.value)
    refreshList()
    localStorage.tasks = tasklist.join(',')
  }
  let item = document.getElementById('item')
  let list = document.getElementById('list')
  let btn = document.getElementById('btn')

  if (localStorage.tasks) {
    tasklist = localStorage.tasks.split(',')
  }
  refreshList()

  btn.onclick = addNewTask

  item.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
      addNewTask()
    }
  })
}

//https://2ality.com/2012/01/object-plus-object.html
