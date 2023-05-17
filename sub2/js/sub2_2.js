// 스크롤 애니메이션
var c2 = $("#content").offset().top-1000;
var c3 = $("#content .intro").offset().top-500;

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop(); //스크롤 top의 높이

  if (scroll >= c2) {
    $("#content .title_area h2").addClass("active");
    $("#content .title_area p").addClass("active");
  } else if (scroll < c2) {
    $("#content .title_area h2").removeClass("active");
    $("#content .title_area p").removeClass("active");
  }
  if (scroll >= c3) {
    $(".intro .bulk_img").addClass("active");
    $(".intro .bulk_text").addClass("active");
  } else if (scroll < c3) {
    $(".intro .bulk_img").removeClass("active");
    $(".intro .bulk_text").removeClass("active");
  }


 
});

$(document).ready(function () {

    var cnt = 3; //탭메뉴 개수 ***
    $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('#content .tab1').css('color', '#1979bd').css('font-weight', '500').css('opacity', '1'); //첫번째 탭메뉴 활성화
    $('#content .tab1').addClass('afline')
  
    $('#content .tab').each(function (index) { // index=0 1 2 3
      $(this).click(function (e) { //각각의 탭메뉴를 클릭하면... 
        e.preventDefault(); // <a> href="#" 값을 강제로 막는다 
  
        $("#content .contlist").hide(); //모든 탭내용을 안보이게...
        //$(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
        $("#content .contlist:eq(" + index + ")").fadeIn('slow');
        $('.tab').css('color', '#666').css('font-weight', '400').css('opacity', '.6'); //모든 탭메뉴를 비활성화
        $('.tab').removeClass('afline').mouseover(function () {
          $(this).css('opacity', '1')
        }).mouseleave(function () {
          $(this).css('opacity', '.6')
        })
  
        $(this).css('color', '#1979bd').css('font-weight', '500').css('opacity', '1'); // 클릭한 해당 탭메뉴만 활성화
        $(this).addClass('afline').mouseleave(function () {
          $(this).css('opacity', '1')
        })
      });
    });
});

//팝업 띄우기
$(document).ready(function(){
  var ind = 0;

  $('.openBtn').on('click', function(e){
      e.preventDefault();
      
      $(this).parents('.text_box').next('.popup').fadeIn('slow'); //클릭한 버튼에 해당하는 팝업 찾아서 띄우기
      $('.modal_box').show();
  });
 
 $('.closeBtn, .box').on('click', function(e){
      e.preventDefault();

      $('.popup').fadeOut('fast');
      $('.modal_box').hide();
 });
});