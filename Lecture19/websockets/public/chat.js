const socket = io()

window.onload = function () {
    let btnBeep = this.document.getElementById('beep')

    btnBeep.onclick = function () {
        socket.emit('beep')
    }

}