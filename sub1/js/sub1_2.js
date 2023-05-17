//스크롤 애니메이션
$(document).ready(function () {

    var c1 = $("#content").offset().top-1000;

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop(); //스크롤 top의 높이

      if (scroll >= c1) {
        $("#content .title_area h2").addClass("active");
        $("#content .title_area p").addClass("active");
      } else if (scroll < c1) {
        $("#content .title_area h2").removeClass("active");
        $("#content .title_area p").removeClass("active");
      }

     
    });
})
    