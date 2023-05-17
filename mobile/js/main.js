// index 메인 자동 처리
var timeonoff; //타이머 처리
var imageCount = 3; //이미지 총개수
var cnt = 1; //이미지 순서 1 2 3 1 2 3
var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

$(".btn1").css("background", "#005793"); //첫번째 on

$(".gallery .link1 img").fadeIn("slow"); //첫번째 이미지 on
$(".gallery .link1 .text").animate({
    top: "34%",
    opacity: 1,
  },
  "slow"
);

function moveg() {
  if (cnt == imageCount + 1) cnt = 1;
  if (cnt == imageCount) cnt = 0; //카운트 초기화

  cnt++; //카운트 1씩 증가 3되면 초기화, 0  1 2 3 1 2 3

  $(".gallery li").hide(); //이미지 모두 off
  $(".gallery .link" + cnt).fadeIn("slow"); // 자신만 on

  $(".mbutton").css("background", "#fff"); //모두 out
  $(".btn" + cnt).css("background", "#1f415c"); //자신만 on

  $(".gallery li .text").css("top", "38%").css("opacity", 0);
  $(".gallery .link" + cnt)
    .find(".text")
    .delay(1000)
    .animate({
        top: "34%",
        opacity: 1,
      },
      "slow"
    );

  if (cnt == imageCount) cnt = 0; //카운트의 초기화 0
}

timeonoff = setInterval(moveg, 4000);
// 타이머를 동작 1~3이미지를 순서대로 자동 처리



//BUSINESS
  var startX, endX;
  var productImageCount = document.querySelectorAll('.business ul li').length; //총 이미지 개수
  var productimageSize = $(window).width(); //이미지 사이즈
  $('.business li').width(productimageSize);
  var imgIndex = 0; //이미지 순서

  $('.business img').on('touchstart mousedown', function (e) {
    e.preventDefault();
    //startX = pc  +  mobile
    startX = e.pageX || e.originalEvent.touches[0].pageX;
  });
  $('.business img').on('touchend mouseup', function (e) {

    e.preventDefault();

    endX = e.pageX || e.originalEvent.changedTouches[0].pageX;

    if (startX < endX) { //끝값이 더 크다면 오른쪽으로 드래그 (이전)
      imgIndex--;
      if (imgIndex < 0) imgIndex = 0;
      $('.business ul').stop().animate({
        left: -productimageSize * imgIndex
      }, 'fast');
    } else { //왼쪽으로 드래그 (다음)
      imgIndex++;
      if (imgIndex >= productImageCount) imgIndex = productImageCount - 1;
      $('.business ul').stop().animate({
        left: -productimageSize * imgIndex
      }, 'fast');
    }

  });

  //웹브라우저 크기 조절시 이미지 사이즈 조절 (반응형)
  $(window).resize(function () {
    productimageSize = $(window).width();
    $('.business li').width(productimageSize);
    $('.business ul').css('left', -productimageSize * imgIndex);
  });

  // 이전 다음버튼 클릭시
  $('.business_btn .left').click(function (e) { //이전
    e.preventDefault();
    imgIndex--;
    if (imgIndex < 0) imgIndex = 0;
    $('.business ul').stop().animate({
      'left': -productimageSize * imgIndex
    }, 'fast');
  })
  $('.business_btn .right').click(function (e) { //다음
    e.preventDefault();
    imgIndex++;
    if (imgIndex >= productImageCount) imgIndex = productImageCount - 1;
    $('.business ul').stop().animate({
      'left': -productimageSize * imgIndex
    }, 'fast').clearQueue();
  })

  //FAQ
  var faqList = $(".faq .faq_list"); //모든 질문 답변 리스트
faqList.find(".a").slideUp(100); // 모든 답변 off
faqList.find("span").html('<i class="fas fa-chevron-down"></i>');

$(".faq .faq_list .trigger").click(function (e) {
  e.preventDefault();
  var myfaqList = $(this).parents(".faq_list"); //클릭한 해당 list

  if (myfaqList.hasClass("hide")) {
    faqList.find(".a").slideUp(100); //모든 답변을 닫아라
    faqList.removeClass("show").addClass("hide"); // 모든 리스트를 hide교체
    faqList.find(".q a:not(span)").css("color", "#333");
    faqList.find("span").html('<i class="fas fa-chevron-down"></i>');

    myfaqList.removeClass("hide").addClass("show"); // show로 바꾼다
    myfaqList.find(".a").slideDown(100); //해당 리스트의 답변을 열어라
    myfaqList.find(".q a:not(span)").css("color", "#005793");
    myfaqList.find("span").html('<i class="fas fa-chevron-up"></i>');
  } else {
    // 'show' 답변이 열려있냐??
    myfaqList.removeClass("show").addClass("hide"); // hide로 바꾼다
    myfaqList.find(".a").slideUp(100); //해당 리스트의 답변을 닫아라
    myfaqList.find(".q a:not(span)").css("color", "#333");
    myfaqList.find("span").html('<i class="fas fa-chevron-down"></i>');
  }
});



//HEADER
var smh=$('.main').height();
// gnb 스크롤 이벤트 체크
$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);
    
    if(scroll>100){//스크롤300까지 내리면
        $('#headerArea .header').addClass('on');
    } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
        $('#headerArea .header').removeClass('on');
    };
});
