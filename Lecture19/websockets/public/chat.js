const socket = io()

$(() => {
  $('#beep').mousedown(() => {
    socket.emit('beep', { state: 'on' })
  })
  $('#beep').mouseup(() => {
    socket.emit('beep', { state: 'off' })
  })

  $('#send').click(() => {
    let msg = $('#msg').val()
    if (msg) {
      socket.emit('msg_send', { msg: msg })
      $('#msg').val('')
    }
  })

  socket.on('msg_rcvd', data => {
    $('#chatbox').append($('<div>').text(data.msg))
  })

  socket.on('beep', data => {
    let status = $('#' + data.id)
    if (!status[0]) {
      $('#statusbox').append(
        $(`<div class="status" id="${data.id}">`).text(data.id)
      )
      status = $('#' + data.id)
    }

    status.css(
      'background-color',
      data.state == 'on' ? 'green' : 'red'
    )
  })
})
