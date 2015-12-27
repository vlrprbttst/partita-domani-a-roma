$(document).ready(function() {
  if ($("html").hasClass("si")) {
    var classes = ["si-1", "si-2", "si-3", "si-4", "si-5", "si-6", "si-7", "si-8", "si-9", "si-10"];

    $("html").each(function() {
      $("body").addClass(classes[~~(Math.random() * classes.length)]);
    });
  } else {
    console.log("ciaone");
  };

});

$(".menu,.close").click(function(){
  $(".menu-cont,.cont").toggleClass("opened");
});
