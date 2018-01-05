$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

  $("#submit-category").on("click", function(e) {
    e.preventDefault();
    let newCategory = $("#category-name").val().trim();
    console.log("newCategory", newCategory);
    showCategoryList.style.display = "none";
    showCategoryInput.style.display = "none";
    showHobbyInput.style.display = "block";
  });

  $("#submit-hobby").on("click", function(e) {
    e.preventDefault();
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
  });

});

let showCategoryList = document.getElementById("category-dropdown");
showCategoryList.style.display = "block";
let showHobbyInput = document.getElementById("hobby-input");
showHobbyInput.style.display = "none";
let showCategoryInput = document.getElementById("category-input");
showCategoryInput.style.display = "none";

function selectCategory() {
  let category = document.getElementById("category").value;
  console.log("category", category);

  if (category !== "add") {
    showCategoryList.style.display = "none";
    showHobbyInput.style.display = "block";
  } else {
    showCategoryInput.style.display = "block";
  }

}
