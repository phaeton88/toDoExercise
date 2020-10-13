var getToDos = function () {
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=207',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response);
      var tsk = response.tasks;
      tsk.forEach(function (task) {
        if (task.completed === true) {
          $('tbody').append('<tr>' + '<td class = "toDo">' + task.content + '</td>' + '<td><button class="btn btn-sm markComplete" data-id="' + task.id + '">Complete</button></td>' + '<td><button class="btn btn-sm markActive" data-id="' + task.id + '">Mark Active</button></td>' + '<td class = "isComplete green">' + 'Completed' + '</td>' + '<td><button class="btn btn-sm remove" data-id="' + task.id + '">remove</button></td>' + '</tr>');
        } else if (task.completed === false) {
          $('tbody').append('<tr>' + '<td class = "toDo">' + task.content + '</td>' + '<td><button class="btn btn-sm markComplete" data-id="' + task.id + '">Complete</button></td>' + '<td><button class="btn btn-sm markActive" data-id="' + task.id + '">Mark Active</button></td>' + '<td class = "isComplete red">' + 'Active' + '</td>' + '<td><button class="btn btn-sm remove" data-id="' + task.id + '">remove</button></td>' + '</tr>');
        }
      });
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
};

$(document).on('load', getToDos());

var addToDo = function () {
  $.ajax({
    type: 'POST',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=207',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: $('.add').val(),
      },
    }),
    success: function (response, textStatus) {
      console.log(response);
      $('input').val('');
      $('tbody').empty();
      getToDos();
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
};

var removeToDo = function (id) {
  $.ajax({
    type: 'DELETE',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + id + '?api_key=207',
    success: function (response, textStatus) {
      console.log(response);
      $('tbody').empty();
      getToDos();
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
};

$(document).on('click', '.btn.remove', function () {
  removeToDo($(this).data('id'));
});

var makeComplete = function (id) {
  $.ajax({
    type: 'PUT',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + id + '/mark_complete?api_key=207',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response);
      $('tbody').empty();
      getToDos();
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
};

$(document).on('click', '.btn.markComplete', function () {
  makeComplete($(this).data('id'));
});

var makeActive = function (id) {
  $.ajax({
    type: 'PUT',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + id + '/mark_active?api_key=207',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response);
      $('tbody').empty();
      getToDos();
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
};

$(document).on('click', '.btn.markActive', function () {
  makeActive($(this).data('id'));
});
