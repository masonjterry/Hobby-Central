$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#logout").on("click", function() {
    localStorage.clear();
  });
  $("#logout-mobile").on("click", function() {
    localStorage.clear();
  });

});

let id = localStorage.getItem("id");

$.get("/api/directions", function(data){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      $("#materials-div").text(data[i].materials);
      $("#instructions-div").text(data[i].instructions);
      $("#images-div").attr("src", data[i].images);
      $("#videos-div").attr("src", data[i].videos);

      var queryURL = "http://api.walmartlabs.com/v1/search?query=hammer&format=json&apiKey=72q26xxyzrdrsjqt8ux7dgyj";
      $.ajax({
         url: queryURL,
         method: "GET"
       }).done(function(response) {
         console.log(response);
      });

      //split data[i].materials by ","
      //create a slick carousel
      //for loop through the new array
        //make an ajax call to walmart api for item info.
        //create a slick button and create an on click event that takes user to walmart store page.
      //push content to directions.handelbars
    }
  }

});

let username = localStorage.getItem("username");

if (username != null) {

  $("#login").text(username);
  $("#mobile-login").text(username);
  $("#welcome").text("Welcome back to Hobby Central, " + username)
  $("#add-hobby").text("Add A Hobby");
  $("#add-hobby-mobile").text("Add A Hobby");
  $("#logout").text("Logout");
  $("#logout-mobile").text("Logout");

}
