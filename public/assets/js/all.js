// ====================================
// 
// ====================================

$(document).ready(function(){

  $(".button-collapse").sideNav();
  $("select").material_select();

});

let showCategoryList = document.getElementById("dropdown1");
showCategoryList.style.display = "block";
let showHobbyList = document.getElementById("dropdown2");
showHobbyList.style.display = "none";
let showDirections = document.getElementById("directions");
showDirections.style.display = "none";

function selectCategory() {
  let category = document.getElementById("category").value;
  console.log("category", category);
  showHobbyList.style.display = "block";

  $.get("/api/all", function(data) {

    var hobbyDropdown = [];

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].category);
      if (data[i].category === category) {
        hobbyDropdown.push(data[i]);
      }

    }
    console.log(hobbyDropdown);
  });

}

function selectFromHobbyList() {
  let hobbyList = document.getElementById("hobby-list").value;
  console.log("From hobby list", hobbyList);
  showCategoryList.style.display = "none";
  showHobbyList.style.display = "none";
  showDirections.style.display = "block";
}
