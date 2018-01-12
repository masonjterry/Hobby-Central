$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#login").on("click", function() {
    localStorage.clear();
  });
  $("#login-mobile").on("click", function() {
    localStorage.clear();
  });


});

let username = localStorage.getItem("username");

if (username != null) {

  $("#user").text(username);
  $("#mobile-user").text(username);
  $("#welcome").text("Welcome back to Hobby Central, " + username)
  $("#add-hobby").text("Add A Hobby");
  $("#add-hobby-mobile").text("Add A Hobby");
  $("#login").text("Logout");
  $("#login-mobile").text("Logout");

}
