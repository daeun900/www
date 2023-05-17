$(document).ready(function() {
    var screenSize, screenHeight;
  
    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이
  
        $("#content").css('margin-top',screenHeight);
        
        if( screenSize > 768){
            $("#imgBG").attr('src','./images/sub3/bg_big.jpg');  } //큰 이미지     
  
        else{$("#imgBG").attr('src','./images/sub3/bg_small.jpg');}//작은 이미지
  
        }
    
  
    screen_size();  //최초 실행시 호출
    
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    }); 
    
    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });
    
    
  });

// dd 내용 변경

  $(document).ready(function() {
    var screenSize
    var current=false;
    let change1 = document.querySelector('.trailer ul li:nth-child(1) dd');

    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
  
      if( screenSize > 1280 && current==false){
        change1.innerHTML = `When optimistic Officer Judy Hopps arrives, she discovers that being the first bunny 
        on a police force of big, tough animals isn’t so easy. Determined to prove herself, 
        she jumps at the opportunity to crack a case, even if it means partnering with a fast-talking,
         scam-artist fox, Nick Wilde, to solve the mystery. Walt Disney Animation Studios’ “Zootopia,” a comedy-adventure directed by Byron Howard 
        and Rich Moore and co-directed by Jared Bush opens in theaters on March 4, 2016.`
            current=true;
          } 

      if(screenSize <= 1280){
        change1.innerHTML = `When optimistic Officer Judy Hopps arrives, she discovers that being the first bunny 
        on a police force of big, tough animals isn’t so easy. Determined to prove herself, 
        she jumps at the opportunity to crack a case, even if it means partnering with a fast-talking,
         scam-artist fox, Nick Wilde, to solve the mystery.`
          current=false;
      }
    }
screen_size();
  
 $(window).resize(function(){ 
      screen_size();
  }); 
});


//cd 이동+회전
var ind = 0;

var bgtop,bgleft,bgwidth,cdtop,cdleft,cdwidth,cdtop2,cdleft2,cdwidth2;

function init(){
    bgtop = $('.turntable').offset().top;
    bgleft = $('.turntable').offset().left;
    bgwidth = $('.turntable img:eq(0)').width();

    cdtop = $('.ost li:eq(0)').find('img').offset().top;
    cdleft = $('.ost li:eq(0)').find('img').offset().left;
    cdwidth = $('.ost li:eq(0)').find('img').width();

    cdtop2 = $('.ost li:eq(1)').find('img').offset().top;
    cdleft2 = $('.ost li:eq(1)').find('img').offset().left;
    cdwidth2 = $('.ost li:eq(1)').find('img').width();
}


$('.play').click(function (e) {
    e.preventDefault();

    init();

    $('.ost li').find('img').css({top:0, left:0});
    $('.ost li').find('img').removeClass('rotation');

    ind = $(this).parents('li').index();
    //console.log(ind);
    //$('.ost li:eq(' + ind + ')').find('img').addClass('rotationImg' + (ind + 1));
    if(ind==0){

        $('.ost li:eq(' + ind + ')').find('img').animate({top:bgtop+(bgwidth/2)-cdtop-(cdwidth/2) , left:bgleft+(bgwidth/2)-cdleft-(cdwidth/3)});
        $('.ost li:eq(' + ind + ')').find('img').addClass('rotation');
    }
    else if(ind==1){
        $('.ost li:eq(' + ind + ')').find('img').animate({top:bgtop+(bgwidth/2)-cdtop2-(cdwidth2/2) , left:bgleft+(bgwidth/2)-cdleft2-(cdwidth2/3)});
        $('.ost li:eq(' + ind + ')').find('img').addClass('rotation');
    }
 
});

$('.stop').click(function (e) {
    e.preventDefault();
    ind = $(this).parents('li').index();
    if(ind==0){
        $('.ost li:eq(' + ind + ')').find('img').animate({top:0, left:0});
        $('.ost li:eq(' + ind + ')').find('img').removeClass('rotation');
    }
    else if(ind==1){
        $('.ost li:eq(' + ind + ')').find('img').animate({top:0 , left:0});
        $('.ost li:eq(' + ind + ')').find('img').removeClass('rotation');
    }
});




/* music*/
var audio;
var num;

audio = document.getElementById('Audio1');

function play1() {
    audio = document.getElementById('Audio1');
    audio.play(); //비디오를 재생한다.
    num = 1;
}

function stop() {
    audio.pause(); 
    audio.currentTime = 0;
}

function play2() {
    audio = document.getElementById('Audio2');
    audio.play(); //비디오를 재생한다.
    num = 2;
}



$(window).resize(function () {
  
    stop();


        $('.ost li').find('img').css({top:0, left:0});
        $('.ost li').find('img').removeClass('rotation');

 

});
