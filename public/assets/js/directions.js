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
      if (data[i].images != "" || data[i].images != "") {
        $("#img-div1").append("<img id=\"images-div\" class=\"responsive-img\" src=" + data[i].images + ">");
        $("#img-div2").append("<div id=\"imagesDiv\">Images</div>");
      }
      if (data[i].videos != "" && data[i].videos != null) {
        $("#vid-div2").append("<div id=\"videosDiv\">Videos</div>");
        $("#vid-div1").append("<iframe id=\"video-div\" src=" + data[i].videos + "></iframe>");
      }
      //split data[i].materials by ","
      //create a slick carousel
      //for loop through the new array
        //make an ajax call to walmart api for item info.
        //create a slick button and create an on click event that takes user to walmart store page.
      //push content to directions.handelbars

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

    $.post(`api/users/${username}/${like}`, function(data) {

    });

    $("#favorite-btn").append(`<button class="fav-btn btn">Favorite<i class="material-icons right">favorite</i></button>`);
    // $("#favorite-btn").append(`<button class="fav-btn btn disabled">Favorited<i class="material-icons right">favorite</i></button>`);
  }

});
