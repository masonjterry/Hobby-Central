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

let id = localStorage.getItem("id");

$.get("/api/directions", function(data){
  $("#dir").text(localStorage.getItem("directions"));
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      $("#materials-div").text(data[i].materials);
      $("#instructions-div").text(data[i].instructions);
      if (data[i].images != "" || data[i].images != "") {
        $("#img-div1").append("<img id=\"images-div\" class=\"responsive-img\" src=" + data[i].images + ">");
        $("#img-div2").append("<div id=\"imagesDiv\">Images</div>");
      }
      if (data[i].videos != "" && data[i].videos != null) {
        $("#vid-div2").append("<div id=\"videosDiv\">Videos</div>");
        $("#vid-div1").append("<iframe id=\"video-div\" src=" + data[i].videos + "></iframe>");
      }
    }
  }

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
