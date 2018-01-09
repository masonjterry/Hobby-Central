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

    // encrypting password
    // select all where usernames and passwords
    // if false fail to log in
    // if true set local storage to username

    $.ajax({
      url: "/api/users/verify",
      method: "POST",
      data: user
    }).then(function(result) {
      if (result) {
        localStorage.clear();
        localStorage.setItem("username", username);
      } else {
        console.log("fail");
      }
    });

  });

});

let username = localStorage.getItem("username");

if (username != null) {

  $("#header").text("Welcome back to Hobby Central " + username);

}
