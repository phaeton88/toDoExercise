var addToDo = function () {
  $.ajax({
    type: 'POST',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: $('.add').val(),
      },
    }),
    success: function (response, textStatus) {
      console.log(response);
    },

    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
/*  $('tbody').append('<tr>' + '<td class = "toDo">' + name + '</td>' +
    '<td class = "price">' + price + '</td>' +
    '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
    '<td class = "subtotal">' +
    '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
    '</tr>'); */
};
