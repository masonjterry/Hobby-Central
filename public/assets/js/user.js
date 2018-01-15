$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#login").on("click", function() {
    localStorage.clear();
  });
  $("#login-mobile").on("click", function() {
    localStorage.clear();
  });

  let username = localStorage.getItem("username");

  $.get("/api/users/profile", function(data){
    for (let i = 0; i < data.length; i++) {
      if (data[i].username == username) {
        $("#user-info").append(toTitleCase(data[i].firstName) + " " + toTitleCase(data[i].lastName));
      }
    }
  });

});

let username = localStorage.getItem("username");

$.post("/api/users/" + username, function(data) {
  console.log(data);
}).then(function(result) {
  console.log(result);
});

if (username != null) {

  $("#user").text(username);
  $("#mobile-user").text(username);
  $("#welcome").text("Welcome back to Hobby Central, " + username)
  $("#add-hobby").text("Add A Hobby");
  $("#add-hobby-mobile").text("Add A Hobby");
  $("#login").text("Logout");
  $("#login-mobile").text("Logout");

}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
