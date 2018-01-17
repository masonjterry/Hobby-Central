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
      $("#dir").text(data[i].name);
      $("#materials-div").text(data[i].materials);
      $("#instructions-div").text(data[i].instructions);

      // var mat_string = data[i].materials;
      // var mat_array = mat_string.split(",");
      //
      // //TODO create a slick carousel
      //
      // //make an ajax call to walmart api for each item info.
      // for (var i = 0; i < mat_array.length(); i ++){
      //
      //   //get the item from array
      //   var item = mat_array[i];
      //
      //   //replace spaces withs "+"
      //   var item = item.replace(" ", "+");
      //
      //   //make an ajax call to walmart api for item info.
      //   var queryURL = "http://api.walmartlabs.com/v1/search?query="+ item +"&format=json&apiKey=72q26xxyzrdrsjqt8ux7dgyj";
      //   $.ajax({
      //      url: queryURL,
      //      method: "GET"
      //    }).done(function(response) {
      //      console.log(response);
      //      //assuming it's working right.
      //
      //      //create a slick button and create an on click event that takes user to walmart store page.
      //
      //   })
      //
      // }

       //push content to directions.handelbars

      if (data[i].images != "" || data[i].images != "") {
        $("#img-div1").append("<img id=\"images-div\" class=\"responsive-img\" src=" + data[i].images + ">");
        $("#img-div2").append("<div id=\"imagesDiv\">Images</div>");
      }
      if (data[i].videos != "" && data[i].videos != null) {
        $("#vid-div2").append("<div id=\"videosDiv\">Videos</div>");
        $("#vid-div1").append("<iframe id=\"video-div\" src=" + data[i].videos + "></iframe>");
      }

    }
  }

  let username = localStorage.getItem("username");

  if (username != null) {

    $("#user").text(username);
    $("#mobile-user").text(username);
    $("#welcome").text("Welcome back to Hobby Central, " + username)
    $("#add-hobby").text("Add A Hobby");
    $("#add-hobby-mobile").text("Add A Hobby");
    $("#login").text("Logout");
    $("#login-mobile").text("Logout");
    $("#favorite-btn").append(`<button class="fav-btn btn">Favorite<i class="material-icons right">favorite</i></button>`);
    $(".fav-btn").on("click", function(e){
      e.preventDefault();

      $.post(`api/users/${username}/${id}`, function(data) {

      });
      location.href="/user";

    });


    // $("#favorite-btn").append(`<button class="fav-btn btn disabled">Favorited<i class="material-icons right">favorite</i></button>`);
  }

});
