$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#login").on("click", function() {
    localStorage.clear();
  });
  $("#login-mobile").on("click", function() {
    localStorage.clear();
  });

  $("#login-btn").on("click", function() {
    let username = $("#username").val().trim();
    let password = $("#password").val().trim();

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
        location.href="/";
      } else {
        alert("username and password do not match");
        location.href="/login";
      }
    });
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
