$(() => {

  let newtask = $('#newtask')
  let tasklist = $('#tasklist')

  $('#addtask').click(()=> {
    tasklist.prepend(
      $('<li>').text(newtask.val())
    )
    newtask.val('')
  })

})

