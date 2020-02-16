$(() => {

    function refreshList(data) {
        $('#tasklist').empty()
        for (let task of data) {
            $('#tasklist').append(
                $('<li>')
                    .append(
                        $('<input type="checkbox">')
                            .attr('checked', task.done)
                    )
                    .append(
                        $('<span>').text(' - - ' + task.name)
                    )
            )
        }
    }

    $.get('/api/todos', refreshList)

    $('#addtask').click((e) => {
        e.preventDefault()

        $.post(
            '/api/add', 
            {
                newtask: $('#newtask').val(),
                completed: $('#completed').prop('checked')
            }, 
            (data) => {
                refreshList(data)
            }
        )
    })
})