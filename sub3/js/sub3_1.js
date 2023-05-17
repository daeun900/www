

  var c1 = $("#content").offset().top-1000;
  var c2 = $("#content .intro").offset().top-500;


  
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
      $(".intro p").addClass("active");
      $(".intro dl").addClass("active");
    } else if (scroll < c2) {
      $(".intro p").removeClass("active");
      $(".intro dl").removeClass("active");


   
  };
  
  })
