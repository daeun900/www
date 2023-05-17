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
    

$(document).ready(function () {
        
   $('.history_nav ul li:eq(0)').find('a').addClass('current');


 var smh= $('.content_area').offset().top + $('.history_nav').height() +100;
 var h1= $('.history_area .history_area01').offset().top+200 ;
 var h2= $('.history_area .history_area02').offset().top-600 ;
 var h3= $('.history_area .history_area03').offset().top-600 ;


 $(window).on('scroll',function(){
     var scroll = $(window).scrollTop();
     
     
     if(scroll>smh+220){ 
         $('.history_nav').addClass('navOn');
         $('header').hide();
     }else{
         $('.history_nav').removeClass('navOn');
         $('header').show();
     }
     

     if(scroll>=h1-100 && scroll<h2-500){
        $('.img01').addClass('sticky1');
        $('.img02').removeClass('sticky2');
        $('.img03').removeClass('sticky1');
    } else if(scroll>=h2+480 && scroll<h3-700){
        $('.img02').addClass('sticky2');
        $('.img01').removeClass('sticky1');
        $('.img03').removeClass('sticky1');
    } else if(scroll>=h3+480){
        $('.img03').addClass('sticky1');
        $('.img01').removeClass('sticky1');
        $('.img02').removeClass('sticky2');
    } else {
        $('.img01').removeClass('sticky1');
        $('.img02').removeClass('sticky2');
        $('.img03').removeClass('sticky1');
    }


      $('.history_nav ul li').find('a').removeClass('current');
     
     
      var cnt=0;
    
           if(scroll>=h1 && scroll<h2){
                 cnt=0;
             }else if(scroll>=h2 && scroll<h3){
                 cnt=1;
             }else if(scroll>=h3){
                 cnt=2;
             }
        $('.history_nav ul li:eq('+cnt+')').find('a').addClass('current');

     
 });

    
      
 
     });
 


//슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
$('.history_nav a').click(function(e){
   e.preventDefault(); //href="#" 속성을 막아주는..메소드

    var value=0; //이동할 스크롤의 거리

    if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
       value= $('#content .history_area01').offset().top-245;  // 해당 콘테츠의 상단의 거리~~
    }else if($(this).hasClass('link2')){
       value= $('#content .history_area02').offset().top-80; 
    }else if($(this).hasClass('link3')){
       value= $('#content .history_area03').offset().top-80; 
    }
    
  $("html,body").stop().animate({"scrollTop":value},1000);
});
