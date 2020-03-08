const socket = io()

$(() => {
  $('#beep').click(() => {
    socket.emit('beep')
  })

  $('#send').click(() => {
      let msg = $('#msg').val()
      if (msg) {
          socket.emit('msg_send', {msg: msg})
          $('#msg').val('')
      }
  })

  socket.on('msg_rcvd', (data) => {
      $('#chatbox').append(
          $('<div>').text(data.msg)
      )
  })
})
