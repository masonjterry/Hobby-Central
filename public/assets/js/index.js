$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#login-btn").on("click", function() {
    let username = $("#username").val().trim();
    console.log("username", username);
    let password = $("#password").val().trim();
    console.log("password", password);
  });

  $("#new-user-btn").on("click", function() {
    let username = $("#username").val().trim();
    console.log("new username", username);
    let password = $("#password").val().trim();
    console.log("new password", password);
  });

});
