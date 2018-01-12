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

let category = localStorage.getItem("category").toLowerCase();

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


$.get("/api/hobby", function(data){
  $("#cat-name").text("Category: " + toTitleCase(category));
  for (let i = 0; i < data.length; i++) {
    if (data[i].category.toLowerCase() == category.toLowerCase()) {
      $("#hobby-list").append("<button id=" + data[i].id + " class=\"hobby-selection btn z-depth-5\">" + data[i].name + "</button>");
    }
  }

  $(".hobby-selection").on("click", function(e) {
    e.preventDefault()
    let directions = e.target.textContent;
    let click = e.target.id;
    localStorage.setItem("directions", toTitleCase(directions));
    localStorage.setItem("id", click);
    selectFromHobbyList();
    location.href="/directions";
  });

});

function selectFromHobbyList() {
  let hobbyList = document.getElementById("hobby-list").value;
  localStorage.removeItem("category");
}

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
