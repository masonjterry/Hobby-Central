$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#create-user-btn").on("click", function() {
    let firstName = $("#firstName").val().trim();
    console.log("new firstName", firstName);
    let lastName = $("#lastName").val().trim();
    console.log("new lastName", lastName);
    let email = $("#email").val().trim();
    console.log("new email", email);
    let username = $("#username").val().trim();
    console.log("new username", username);
    let password = $("#password").val().trim();
    console.log("new password", password);
    verify(lastName, firstName, email, username, password);

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    }

    $.ajax({
      url: "/api/user",
      method: "POST",
      data: newUser
    });


  });

  function verify(lname, fname, email, username, password) {
    if (lname.length < 2) {
      console.log("lastname is too short");
    } else {
      console.log("lastname is valid");
    }

    if (fname.length < 2) {
      console.log("firstname is too short");
    } else {
      console.log("firstname is valid");
    }

    for (var i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        console.log("email is valid");
      } else {
        console.log("email is invalid");
      }
    }

    if (username.length < 5) {
      console.log("username is too short");
    } else {
      console.log("username is valid");
    }

    if (password.length >= 6) {
      for (var i = 0; i < password.length; i++) {
        if (password[i] === "!" || password[i] === "?" || password[i] === "." || password[i] === "$") {
          console.log("password is valid");
        } else {
          console.log("password is invalid");
        }
      }
    } else {
      console.log("password is invalid");
    }
  }

});
