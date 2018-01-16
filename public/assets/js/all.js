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

$(".cat-list").on("click", function(e) {
  e.preventDefault();
  let category = e.target.value;
  localStorage.setItem("category", category);
  location.href="/hobby";

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
