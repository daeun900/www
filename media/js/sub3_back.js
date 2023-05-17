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
//시디 회전
var ind = 0;

$('.play').click(function (e) {
    e.preventDefault();
    ind = $(this).parents('li').index();
    console.log(ind);
    $('.ost li:eq(' + ind + ')').find('img').addClass('rotationImg' + (ind + 1));
});

$('.stop').click(function (e) {
    e.preventDefault();
    ind = $(this).parents('li').index();
    $('.ost li').find('img').removeClass();
    $('.ost li:eq(' + ind + ')').find('img').removeClass();
});


/* music*/
var audio; //전역변수 선언
var audioAll = document.querySelectorAll('.testAudio');
var num;

function play1() {
    audio = document.getElementById('testAudio1');
    audio.play(); //비디오를 재생한다.
    num = 1;
}

function stop1() {
    audio.pause(); //비디오를 재생한다.
    audio.currentTime = 0;
}

function play2() {
    audio = document.getElementById('testAudio2');
    audio.play(); //비디오를 재생한다.
    num = 2;
}

function stop2() {
    audio.pause(); //비디오를 재생한다.
    audio.currentTime = 0;
}

function play3() {
    audio = document.getElementById('testAudio3');
    audio.play(); //비디오를 재생한다.
    num = 3;
}

function stop3() {
    audio.pause(); //비디오를 재생한다.
    audio.currentTime = 0;
}

$(window).resize(function () {
    screenSize = $(window).width();
    $('.tab_menu li').find('img').removeClass();
    $('.music ul.tab_menu li:eq(0)').removeClass()
});