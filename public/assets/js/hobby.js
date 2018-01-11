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

$.get("/api/hobby", function(data){
  for (let i = 0; i < data.length; i++) {
    if (data[i].category.toLowerCase() == category.toLowerCase()) {
      $("#hobby-list").append("<button id=" + data[i].id + " class=\"btn list-btn\">" + data[i].name + "</button>");
    }
  }

  $(".list-btn").on("click", function(e) {
    e.preventDefault()
    let click = e.target.id
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

  $("#login").text(username);
  $("#mobile-login").text(username);
  $("#welcome").text("Welcome back to Hobby Central, " + username)
  $("#add-hobby").text("Add A Hobby");
  $("#add-hobby-mobile").text("Add A Hobby");
  $("#logout").text("Logout");
  $("#logout-mobile").text("Logout");

}
