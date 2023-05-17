//글로벌네비게이션 코드 작성

$(document).ready(function() {

    var smh=$('.visual').height(); //비주얼 이미지의 높이를 리턴한다   1080px
    var on_off=false;  //false(오버아웃)  true(오버)
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background','#fff').css("box-shadow", "1px 1px 6px 1px rgba(0,0,0,0.1)");
            $('.dropdownmenu li a').css('color','#333'); 
            $('.top_menu a').css('color','#666')
            //$('#headerArea').animate({height:440},'fast').clearQueue();
            on_off=true; //마우스 올라가면 true
        });
        
    
        //스크롤의 위치변화에 따라 마우스아웃 시 발생하는 이벤트
 
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-100 ){ //현재 메뉴가 비주얼 이미지내에 있을 경우
                $(this).css('background','none').css('box-shadow','none'); 
                $('.dropdownmenu li a').css('color','#fff');
                $('.top_menu a').css('color','#fff');
                //$('#headerArea').animate({height:250},'normal').clearQueue();
            }else{ //메뉴가 비주얼영역을 벗어났을 경우

                $(this).css('background','#fff'); 
                $('.dropdownmenu li a').css('color','#333');
                $('.top_menu a').css('color','#666')
                //$('#headerArea').animate({height:250},'normal').clearQueue();
            }
           on_off=false;    
       });
 
       //스크롤의 위치변화가 생기면 발생하는 이벤트 ->scroll, 주체는 무조건 window
 
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-160){//스크롤300까지 내리면
                $('#headerArea').css('background','#fff').css("box-shadow", "1px 1px 6px 1px rgba(0,0,0,0.1)");
                $('.dropdownmenu li a').css('color','#333');
                $('.top_menu a').css('color','#666');
            }else{//스크롤 내리기 전 마우스 올리지 않았을 때
               if(on_off==false){ //헤더에서 마우스가 벗어난 상태
                    $('#headerArea').css('background','none').css('box-shadow','none');
                    $('.dropdownmenu li a').css('color','#fff');
                    $('.top_menu a').css('color','#fff');
               }
            }; 
            
         });
 
   
     //2depth 열기/닫기
     $('ul.dropdownmenu').hover(
        function() { 
           $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:430},'fast').clearQueue();
        },function() {
           $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
           $('#headerArea').animate({height:240},'fast').clearQueue();
      });
     
      //1depth 효과
      $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#0c205b');
        },function() {
           $('.depth1',this).css('color','#333');
      });

      //2depth효과
      $('ul.dropdownmenu li.menu ul li a').hover(
        function() { 
            $(this).css('color','#0c205b');
        },function() {
           $(this).css('color','#333');
      });

      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:430},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:240},'normal').clearQueue();
     });
 });
 
     // topmove
     $('.top_move').hide();
    
     $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
         var scroll = $(window).scrollTop(); //스크롤의 거리
         var scrollFoot = $('#footerArea').offset().top - $(window).height() + 60; // 푸터에서의 값 계산
         
         //$('.text').text(scroll);
         if(scroll > 300){ // 300이상의 거리가 발생되면
             $('.top_move').fadeIn('slow');  // top 보이기
 
             if(scroll < scrollFoot){ // footer보다 작으면 bottom:20, fixed
                 $('.top_move').css('bottom',55).css('position','fixed');
             } else { // footer보다 크면 bottom:200, absolute
                 $('.top_move').css('bottom',222).css('position','absolute');
             };
     
         }else{
             $('.top_move').fadeOut('fast'); // top 감추기
         }
     });
     
     $('.top_move a').click(function(e){
         e.preventDefault();
         $("html,body").stop().animate({"scrollTop":0},500);//상단으로 스르륵 이동합니다.
     });
 
     setTimeout(function(){ 
         // scrollBar
         var footScrollBar = '<div class="scrollBar"><span></span></div>';
         $('#footerArea').append(footScrollBar);
 
         $(window).on('scroll',function(){
 
             var scroll = $(window).scrollTop();
             var scroll2 = $(document).height() - window.innerHeight;
             var scroll = (scroll*100)/scroll2;
         
             $('.scrollBar span').css('width', scroll+'%');
         
             //console.log($(scroll +'  '+ scroll2));
         });
       }, 300);
 

       //family
// 하단 family site 클릭 이벤트
$(".family .arrow").toggle(
    function (e) {
      e.preventDefault();
      $(".select .aList").fadeIn("slow");
      $(this).find(".icon").html('<i class="fa-solid fa-chevron-down"></i>');
    },
    function (e) {
      e.preventDefault();
      $(".select .aList").fadeOut("fast");
      $(this).find(".icon").html('<i class="fa-solid fa-chevron-up"></i>');
    }
  );
  
  //tab키 처리
  $(".family .arrow").on("focus", function () {
    $(".family .aList").fadeIn("fast");
  });
  $(".family .aList li:last a").on("blur", function () {
    $(".family .aList").fadeOut("fast");
  });
 

