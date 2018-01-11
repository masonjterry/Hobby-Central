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
console.log("id", id);

$.get("/api/directions", function(data){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      console.log(data[i].materials);
      console.log(data[i].instructions);
      console.log(data[i].images);
      console.log(data[i].videos);
      $("#materials-div").text(data[i].materials);
      $("#instructions-div").text(data[i].instructions);
      $("#images-div").attr("src", data[i].images);
      $("#videos-div").attr("src", data[i].videos);
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
