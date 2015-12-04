$(document).ready(function() {
  $('#item-list-form').on("submit", function(event) {
    event.preventDefault();

    var name = $("#grocery_name").val();

    if( name.trim().length === 0 ) {
      alert("Invalid Item Name!");
    } else {
      submitNameViaAjax(name);
    }
  });
});

var submitNameViaAjax = function(name) {
  var request = $.ajax({
    method: "POST",
    url: "/groceries",
    data: { name: name }
  });

  request.done(function(dataFromDb) {
    $("#grocery-list").append("<li class=item>" + name + "</li>");
    $("#grocery_name").val('');
  });
};
