$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

});

// let showCategoryList = document.getElementById("dropdown1");
// showCategoryList.style.display = "block";
// let showHobbyList = document.getElementById("dropdown2");
// showHobbyList.style.display = "none";
// let showDirections = document.getElementById("directions");
// showDirections.style.display = "none";

function selectCategory() {

  let category = document.getElementById("category").value;
  console.log("category", category);
  showHobbyList.style.display = "block";
}

function addMaterials() {
  let hobbyList = document.getElementById("hobby-list").value;
  console.log("From hobby list", hobbyList);
  showCategoryList.style.display = "none";
  showHobbyList.style.display = "none";
  showDirections.style.display = "block";
}

// add screen

// askes the user what category do they want to put their add in (required)

  // they can pick from a pre populated list of categories or make their down

  // if they want to add their own, a box will pop up and ask them the category name

    // once they add a category the system will run like normal (required)

  // if they pick a prepopulated one, it pops up a box asking what the name of their hobby/task is (required)

  // once they add the name it will ask what is needed for the hobby (required)

  // once the material list is added, it will ask for the directions (required)

  // once the directions are added, it will ask for video or image links (these are not required)

  // it bring up a submit button to add their hobby to the database

  // it will then redirect to the home screen
