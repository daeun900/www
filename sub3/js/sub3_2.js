

var c1 = $("#content").offset().top-1000;
var c2 = $("#content .intro").offset().top-500;
var c3 = $("#content .con1").offset().top-500;



$(window).on("scroll", function () {
  var scroll = $(window).scrollTop(); //스크롤 top의 높이

  if (scroll >= c1) {
    $("#content .title_area h2").addClass("active");
    $("#content .title_area p").addClass("active");
  } else if (scroll < c1) {
    $("#content .title_area h2").removeClass("active");
    $("#content .title_area p").removeClass("active");
  }

  if (scroll >= c2) {
    $(".intro ul li").addClass("active");
  } else if (scroll < c2) {
    $(".intro ul li").removeClass("active");}

    if (scroll >= c3) {
      $(".con1 li p").addClass("active");
      $(".con1 li strong").addClass("active");
    } else if (scroll < c3) {
      $(".con1 li p").removeClass("active");
      $(".con1 li strong").removeClass("active");
 
};

})
