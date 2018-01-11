//=======================================
// this add.js file is the page listener
// for button calls
//=======================================

$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  let category;

  // $("#submit-category").on("click", function(e) {
  //   e.preventDefault();
  //   category = $("#category-name").val().trim();
  //   console.log("newCategory", newCategory);
  //   // showCategoryList.style.display = "none";
  //   // showCategoryInput.style.display = "none";
  //   // showHobbyInput.style.display = "block";
  // });
//=======================================
//
// this below is the function that is
// executed when the submit-hobby 
// button is clicked under create a 
// hobby page
//=======================================

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
//=======================================
// user check below
// check if the user is logged in by 
// checking the username variable in
// the localStorage data that's been
// saved when the user logged in
//=======================================

    if (localStorage.getItem("username") != null) {
// if username is not empty, then create this
// data set that will be passed onto sequelize
      let newHobby = {
        category: category,
        name: hobbyName,
        user: localStorage.getItem("username"),
        materials: materials,
        instructions: steps,
        images: images,
        videos: videos
      }
// send the ajax data set and do POST method
      $.ajax({
        url: "/api/hobby",
        method: "POST",
        data: newHobby
      });

    } else {
// else if the username is not in the 
// localstorage variables , prompt
// the user to login
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


//=======================================
// function that 
//=======================================

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
