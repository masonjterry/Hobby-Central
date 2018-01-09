$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#login-btn").on("click", function() {
    let username = $("#username").val().trim();
    console.log("username", username);
    let password = $("#password").val().trim();
    console.log("password", password);

    let user = {
      username: username,
      password: password
    }

  });

});
