// When creating your AJAX filter, ensure the ID of the radio/checkbox is set to be the slug.
// This is what will be used in the hash url, so having it as the term_id won't really be user friendly
// Once your normal AJAX filter is all setup and working, add the following to a new JS file
// and change the values/classes accordingly. 

$(function () {

  var hashCategory = ""; // Create an empty variable for the hash value

  //
  // If the filter has been applied, add the value of the ID attribute to the url as a hash link
  $("#filter input").on("change", function () {
    hashCategory = $("#form input:checked").attr("id");
    location.hash = hashCategory;
  });

  //
  // When visiting the newly created URL, check what the hash is and check the corresponding radio button
  var hashUrl = location.hash.substr(1); // Gets the hash value

  if (window.location.href.indexOf(hashUrl) > -1) {
    $("#form input[id='" + hash + "']").prop("checked", true);
  }

  //
  // If the URL does contain a hash link, submit the AJAX form again (copy of your AJAX code)
  if (window.location.hash) {
    var filter = $('#form');
    $.ajax({
      url: filter.attr('action'),
      data: filter.serialize(),
      type: filter.attr('method'),

      success: function (data) {
        $('#response').html(data);
      }
    });
    return false;
  }

})