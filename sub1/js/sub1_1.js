$(document).ready(function () {

    var c1 = $("#content").offset().top-1000;
    var c2 = $("#content").offset().top;
    var c3 = $("#content .con3").offset().top-500;
    var c4 = $("#content .con4").offset().top-700;
 

    
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
        $("#content .con1").addClass("active");
        $("#content .con2").addClass("active");
      } else if (scroll < c2) {
        $("#content .con1").removeClass("active");
        $("#content .con2").removeClass("active");
      }

      if (scroll >= c3) {
        $(".con3 ul li").addClass("active");
      } else if (scroll < c3) {
        $(".con3 ul li").removeClass("active");
      }

      if (scroll >= c4) {
        $(".con4 dd").addClass("active");
      } else if (scroll < c4) {
        $(".con4 dd").removeClass("active");
      }
     
    });
    
    });