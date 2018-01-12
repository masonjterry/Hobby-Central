$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#logout").on("click", function() {
    localStorage.clear();
  });
  $("#logout-mobile").on("click", function() {
    localStorage.clear();
  });

  let category;

  $("#submit-hobby").on("click", function(e) {
    e.preventDefault();
    category = $("#category-name").val().trim();
    let hobbyName = $("#hobby-name").val().trim();
    let materials = $("#materials-input").val().trim();
    let steps = $("#steps-input").val().trim();
    let images = $("#images-input").val().trim();
    let videos = $("#videos-input").val().trim();


    if (localStorage.getItem("username") != null) {

      let newHobby = {
        category: category,
        name: hobbyName,
        user: localStorage.getItem("username"),
        materials: materials,
        instructions: steps,
        images: images,
        videos: videos
      }

      $.ajax({
        url: "/api/hobby",
        method: "POST",
        data: newHobby
      }).then(function(result) {

      });

    } else {
      alert("please log in");
    }

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
