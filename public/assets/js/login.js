$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#logout").on("click", function() {
    localStorage.clear();
  });
  $("#logout-mobile").on("click", function() {
    localStorage.clear();
  });

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
        aler("username and password to not match");
      }
    });
    location.href="/";
  });

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
