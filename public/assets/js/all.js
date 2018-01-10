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

let showCategoryList = document.getElementById("dropdown1");
showCategoryList.style.display = "block";
let showHobbyList = document.getElementById("dropdown2");
showHobbyList.style.display = "none";
let showDirections = document.getElementById("directions");
showDirections.style.display = "none";

function selectCategory() {
  let category = document.getElementById("category").value; // Woodworking
  console.log(category);
  // showHobbyList.style.display = "block";
  // location.href="/hobby";

  // $.get("/hobby/:category" + category.toLowerCase(), function(hobbies) {
  //
  // });

}

function selectFromHobbyList() {
  let hobbyList = document.getElementById("hobby-list").value;
  console.log(hobbyList);
  showCategoryList.style.display = "none";
  showHobbyList.style.display = "none";
  showDirections.style.display = "block";
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
