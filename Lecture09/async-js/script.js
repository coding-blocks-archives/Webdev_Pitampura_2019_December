let count = 0

window.onload = function() {
  let btnCount = document.getElementById('btnCount')
  let btnWait = document.getElementById('btnWait')
  let btnBadWait = document.getElementById('btnBadWait')
  let divResult = document.getElementById('divResult')

  btnCount.onclick = function() {
    count++
    console.log('count = ' + count)
  }

  btnBadWait.onclick = function () {
    let start = new Date().getTime()
    while (new Date().getTime() - 5000 < start) {
    }
  }

  btnWait.onclick = function() {
    divResult.innerText = 'WAITING'
    console.log(new Date().getTime())
    setTimeout(() => {
      console.log(new Date().getTime())
      divResult.innerText = 'DONE'
    }, 5000)

  }
}
