$(() => {

  let newtask = $('#newtask')
  let tasklist = $('#tasklist')

  $('#addtask').click(()=> {
    tasklist.append($('<li>').text(newtask.val()))
    newtask.val('')
  })


})

