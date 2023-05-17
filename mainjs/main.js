//ABOUT HTM
$(document).ready(function() {
  var position=0;  //최초위치
  //var movesize=550; //이미지 하나의 너비
  var movesize=550; //이미지 하나의 너비(550)
  //console.log(movesize);
  var timeonoff;
  var cnt=2;


  $('.move_box1 ul li:eq('+ cnt +')').animate({top:-100},'slow');
  $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0');

  // function moveG() {
  //     position-=movesize;  // 550씩 감소 (이미지 하나의 너비)
  //     $('.move_box1').animate({left:position}, 'fast',
  //         function(){							
  //         if(position<=-2200){
  //           position=0;
  //             $('.move_box1').css('left',0);
             
  //             cnt=2;
  //             $('.move_box1 ul.media_box li').css('top',0);
  //             $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
  //             $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500','easeOutQuad').clearQueue();
  //             $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;;
  //         }
  //         else{
  //           cnt++;
  //           $('.move_box1 ul.media_box li').css('top',0);
  //           $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
  //           $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500','easeOutQuad').clearQueue();
  //           $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;;
  //        }
  //     }).clearQueue();
  //     $('.move_box2').animate({left:position}, 'fast',
  //     function(){							
  //     if(position<=-2200){
  //       position=0;
  //         $('.move_box2').css('left',0);}
         

  // }).clearQueue();
  // }

  // //timeonoff= setInterval(moveG, 5000);


$('.btn').click(function(e){
   e.preventDefault();

  //  clearInterval(timeonoff);
   
   if($(this).is('.prev')){  //이전버튼 클릭
    position-=movesize;  // 550씩 감소
    $('.move_box1').animate({left:position}, 'fast',function(){
       if(position<=-2200){
           position=0;
           $('.move_box1').css('left',0);
           cnt=2;
           $('.move_box1 ul.media_box li').css('top',0);
           $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
           $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500','easeOutQuad').clearQueue();
           $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;;
        }else{
           cnt++;
           $('.move_box1 ul.media_box li').css('top',0);
           $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
           $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500','easeOutQuad').clearQueue();
           $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;
        }
       }).clearQueue();  
       $('.move_box2').animate({left:position}, 'fast',function(){
        if(position<=-2200){
            position=0;
            $('.move_box2').css('left',0);
           
         }
        }).clearQueue();  

  
      }else if($(this).is('.next')){  //다음버튼 클릭
        if(position>=0){
             $('.move_box').css('left',-2200);
   
             position=-2200;
             cnt=6;
             $('.move_box1 ul.media_box li').css('top',0);
             $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
            //  $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500').clearQueue();
            //  $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;
             //$('.move_box ul.media_box li:eq('+ cnt +')').css('top',-30);
         }


         position+=movesize; // 550씩 증가
         $('.move_box1').animate({left:position}, 'fast',
             function(){							
                 if(position>=0){
                     $('.move_box1').css('left',-2200);
                     position=-2200;

                     cnt=6;
                     $('.move_box1 ul.media_box li').css('top',0);
                     $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
                     $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500').clearQueue();
                     $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;
                 }else{
                     cnt--;
                     $('.move_box1 ul.media_box li').css('top',0);
                     $('.move_box1 ul.media_box li p').css('font-weight','400').css('margin','0');
                     $('.move_box1 ul.media_box li:eq('+ cnt +')').animate({top:-100},'500').clearQueue();
                     $('.move_box1 ul.media_box li:eq('+ cnt +') p').css('font-weight','700').css('margin','0 280px 10px 0').clearQueue();;
                 }
                 
             }).clearQueue();
             $('.move_box2').animate({left:position}, 'fast',
             function(){							
                 if(position>=0){
                     $('.move_box2').css('left',-2200);
                     position=-2200;
            
                 }
             }).clearQueue();
   }
 });


});









//ESG 경영
$(document).ready(function(){
  
  
    
    $('.liTitle').css('width', '353');
    $('.slide_menu ul li').mouseenter(function(event){
      var $target=$(event.target);
      
      if($target.is('.slide_menu .buttonMenu01')){
        $('.slide_menu .img02').animate({left:[530,'easeOutQuad']},450).clearQueue();
        $('.slide_menu .img02 .liTitle').css('width', 265);
        $('.slide_menu .img03').animate({left:[795,'easeOutQuad']},450).clearQueue();
        $('.slide_menu .img03 .liTitle').css('width', 265);
      
      }else if($target.is('.buttonMenu02')){
        $('.slide_menu .img02').animate({left:[265,'easeOutQuad']},450).clearQueue();
        $('.slide_menu .img01 .liTitle').css('width', 265);
        $('.slide_menu .img03').animate({left:[795,'easeOutQuad']},450).clearQueue();
        $('.slide_menu .img03 .liTitle').css('width', 265);
      
      }else if($target.is('.buttonMenu03')){
        $('.slide_menu .img02').animate({left:[265,'easeOutQuad']},450).clearQueue();
        $('.slide_menu .img01 .liTitle').css('width', 265);
        $('.slide_menu .img03').animate({left:[530,'easeOutQuad']},450).clearQueue();
        $('.slide_menu .img02 .liTitle').css('width', 265);
      
      }
    });
  
    $('.slide_menu ul').mouseleave(function(){
      $('.slide_menu .img01').animate({left:[0,'easeOutQuad']},450).clearQueue();
      $('.slide_menu .img02').animate({left:[353,'easeOutQuad']},450).clearQueue();
      $('.slide_menu .img03').animate({left:[706,'easeOutQuad']},450).clearQueue();
      $('.liTitle').animate({ width: 353 });
    });
  });

  //NEWS
$(document).ready(function() {
  var position2=0;  //최초위치
  var movesize2=400; //이미지 하나의 너비(400)
 
  $('.newsbox ul').after($('.newsbox ul').clone()); //ul 복제

$('.btn2').click(function(e){
   e.preventDefault();
   
   if($(this).is('.prev2')){  //이전버튼 클릭
       
        position2-=movesize2;  // 400씩 감소
       $('.newsbox').animate({left:position2}, 'fast',
       function(){
          if(position2<=-3600){
              position2=-800;
              $('.newsbox').css('left',-800);
           }
       }).clearQueue();  

   }else if($(this).is('.next2')){  //다음버튼 클릭
         if(position2>=0){
              $('.newsbox').css('left',-2800);
              position2=-2800;
          }

          position2+=movesize2; // 150씩 증가
          $('.newsbox').animate({left:position2}, 'fast',
              function(){							
                  if(position2>=0){
                      $('.newsbox').css('left',-2800);
                      position2=-2800;
                  }
              }).clearQueue();

    }
 });
});

