 $(document).ready(function() {
  if ($("html").hasClass("si")) {
    var classes = ["si-1", "si-2", "si-3", "si-4", "si-5", "si-6", "si-7", "si-8", "si-9", "si-10"];

    $("html").each(function() {
      $(".cont").addClass(classes[~~(Math.random() * classes.length)]);
    });
  } else {
    var classes = ["no-1", "no-2", "no-3", "no-4", "no-5", "no-6", "no-7", "no-8", "no-9", "no-10"];
    $("html").each(function() {
      $(".cont").addClass(classes[~~(Math.random() * classes.length)]);
    });
  };

});

$(".menu,.close").click(function() {
  $(".menu-cont,.cont").toggleClass("opened");
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    $("html").addClass("isMobile iOS");
  } else if (userAgent.match(/Android/i)) {
    $("html").addClass("isMobile android");
  }
}
getMobileOperatingSystem();


$('.cont').imagesLoaded({
  background: true
}, function() {
  $('body').removeClass('loading').addClass('loaded').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function() {
      $('.overlay').css("display", "none");

    });
});
