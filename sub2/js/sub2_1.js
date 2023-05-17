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
    $(".intro .container_img").addClass("active");
    $(".intro .container_text").addClass("active");
  } else if (scroll < c3) {
    $(".intro .container_img").removeClass("active");
    $(".intro .container_text").removeClass("active");
  }


 
});


//슬라이드 메뉴 
$('.container_path a').click(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는메소드
 
     var value=0; //이동할 스크롤의 거리
 
     if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭    if($(this).is('#link1')){
        value= $('#content .container_list01').offset().top-240;  // 해당 콘테츠의 상단의 거리
     }else if($(this).hasClass('link2')){
        value= $('#content .container_list02').offset().top-240; 
     }else if($(this).hasClass('link3')){
        value= $('#content .container_list03').offset().top-240; 
     }
     
   $("html,body").stop().animate({"scrollTop":value},1000);
 });
 



//팝업 띄우기
$(document).ready(function(){
    var ind = 0;
    var total=3;

    $('.openBtn').on('click', function(e){
        e.preventDefault();
        
        $(this).parent('.text_box').next('.pop_up').fadeIn('slow'); //클릭한 버튼에 해당하는 팝업 찾아서 띄우기
        $('.modal_box').show();
    });
   
   $('.closeBtn, .box').on('click', function(e){
        e.preventDefault();

        $('.pop_up').fadeOut('fast');
        $('.modal_box').hide();
   });

   ind = $('.pop_up').index('.pop_up');

   $('.pop_btn a').click(function(e){
    e.preventDefault();

    $('.pop_up').hide(); 
   
   if($(this).hasClass('prev')){ //이전버튼 클릭
       //if(ind==0)ind=memo.length;
       if(ind==0)ind=total; //2 1 0  2 1 0
       ind--;
       $('.pop_up:eq('+ ind +')').fadeIn('slow'); 
       
   }else if($(this).hasClass('next')){ //다음버튼 클릭
       //if(ind==memo.length-1)ind=-1;
       if(ind==total-1)ind=-1;// 0 1 2  0 1 2  
       ind++;
       $('.pop_up:eq('+ ind +')').fadeIn('slow'); 
       
   }
   console.log(ind);
});
});