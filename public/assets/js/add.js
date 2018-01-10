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

  // $("#submit-category").on("click", function(e) {
  //   e.preventDefault();
  //   category = $("#category-name").val().trim();
  //   console.log("newCategory", newCategory);
  //   // showCategoryList.style.display = "none";
  //   // showCategoryInput.style.display = "none";
  //   // showHobbyInput.style.display = "block";
  // });

  $("#submit-hobby").on("click", function(e) {
    e.preventDefault();
    category = $("#category-name").val().trim();
    let hobbyName = $("#hobby-name").val().trim();
    console.log("hobbyName", hobbyName);
    let materials = $("#materials").val().trim();
    console.log("materials", materials);
    let steps = $("#steps").val().trim();
    console.log("steps", steps);
    let images = $("#images").val().trim();
    console.log("images", images);
    let videos = $("#videos").val().trim();
    console.log("videos", videos);

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


  });

});

// let showCategoryList = document.getElementById("category-dropdown");
// showCategoryList.style.display = "block";
// let showHobbyInput = document.getElementById("hobby-input");
// showHobbyInput.style.display = "none";
// let showCategoryInput = document.getElementById("category-input");
// showCategoryInput.style.display = "none";

function selectCategory() {
  category = document.getElementById("category").value;
  console.log("category", category);

  if (category !== "add") {
    showCategoryList.style.display = "none";
    showHobbyInput.style.display = "block";
  } else {
    showCategoryInput.style.display = "block";
  }

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
