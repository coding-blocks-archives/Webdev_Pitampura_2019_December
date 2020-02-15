$(() => {
  function showData(data) {
    $("#todos").empty();
    for (let task of data) {
      $("#todos").append($("<li>").text(task));
    }
  }

  $("#load").click(() => {
    $.get("/todos", data => {
        showData(data)
    });
  });

  $("#add").click(() => {
    let newtask = $("#newtask").val();
    $.get("/todos/add?task=" + newtask, data => {
        showData(data)
    });
  });
});
