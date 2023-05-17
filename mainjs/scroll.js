$(document).ready(function () {

var s1 = $("#content section:eq(0)").offset().top-500;
var s2 = $("#content section:eq(1)").offset().top-500;
var s3 = $("#content section:eq(2)").offset().top-500;
var s4 = $("#content section:eq(3)").offset().top-500;
var s5 = $("#content section:eq(4)").offset().top-500;
console.log(s1);

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop(); //스크롤 top의 높이

  //스크롤의 거리의 범위를 처리

  // business
  if (scroll >= s1-100) {
    $(".business_title").addClass("business_title_active");
  } else if (scroll < s1) {
    $(".business_title").removeClass("business_title_active");
  }
  if (scroll >= s1+100) {
    $(".container_box").addClass("container_box_active");
  } else if (scroll < s1) {
    $(".container_box").removeClass("container_box_active");
  }
  if (scroll >= s1+700) {
    $(".bulk_box").addClass("bulk_box_active");
  } else if (scroll < s1) {
    $(".bulk_box").removeClass("bulk_box_active");
  }


  //about
  if (scroll >= s2-100) {
    $(".about_hmm").addClass("about_active");
  } else if (scroll < s2) {
    $(".about_hmm").removeClass("about_active");
  }
  if (scroll >= s2+200) {
    $(".about .move_box_wrap").addClass("move_box_active");
  } else if (scroll < s2) {
    $(".about .move_box_wrap").removeClass("move_box_active");
  }

  // esg

  if (scroll >= s3-200) {
    $(".esgtitle").addClass("esg_active");
  } else if (scroll < s3) {
    $(".esgtitle").removeClass("esg_active");
  }
  if (scroll >= s3) {
    $(".esg .slide_menu").addClass("slide_active");
  } else if (scroll < s3) {
    $(".esg .slide_menu").removeClass("slide_active");
  }

  // news
  if (scroll >= s4-200) {
    $(".news h3").addClass("news_active");
  } else if (scroll < s4) {
    $(".news h3").removeClass("news_active");
  }
  if (scroll >= s4-100) {
    $(".news .newsinner").addClass("news_active");
  } else if (scroll < s4) {
    $(".news .newsinner").removeClass("news_active");
  }

  // recruit

  if (scroll >= s5-300) {
    $(".recruit").addClass("recruit_active");
  } else if (scroll < s5) {
    $(".recruit").removeClass("recruit_active");
  }
});

});