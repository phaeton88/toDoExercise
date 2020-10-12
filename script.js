var getToDos = function () {
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=207',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response);
      var tsk = response.tasks;
      tsk.forEach(function (task) {
        $('tbody').append('<tr>' + '<td class = "toDo">' + task.content + '</td>' + '<td><button class="btn btn-sm complete">Mark Complete</button></td>' + '<td><button class="btn btn-sm remove" data-id="' + task.id + '">remove</button></td>' + '</tr>');
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
      $('tbody').empty();
      getToDos();
      /*var responseContent = response.task.content;
      $('tbody').append('<tr>' + '<td class = "toDo">' + responseContent + '</td>' + '<td><button class="btn btn-sm complete">Mark Complete</button></td>' + '<td><button class="btn btn-sm remove">remove</button></td>' + '</tr>');*/
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
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
};

$(document).on('click', '.btn.remove', function () {
  removeToDo($(this).data('id'));
  $(this).closest('tr').remove();
  getToDos();
});




/*  $('tbody').append('<tr>' + '<td class = "toDo">' + name + '</td>' +
    '<td class = "price">' + price + '</td>' +
    '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
    '<td class = "subtotal">' +
    '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
    '</tr>'); */
