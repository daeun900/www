$(document).ready(function() {
  var screenSize, screenHeight;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768){
          $("#imgBG").attr('src','./images/sub1/bg_big.jpg');  } //큰 이미지     

      else{$("#imgBG").attr('src','./images/sub1/bg_small.jpg');}//작은 이미지

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
    let change1 = document.querySelector('.about p');

    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
  
      if( screenSize > 1024 && current==false){
        change1.innerHTML = `Zootopia (titled Zootropolis or Zoomania in various regions is a 2016 American) computer-animated buddy cop action comedy film
        produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 55th Disney animated feature film, the first 
        installment in the Zootopia franchise, it was directed by Byron Howard and Rich Moore, co-directed by Jared Bush (in his feature 
        directorial debut), and produced by Clark Spencer, from a screenplay written by Bush and Phil Johnston, and a story by Howard, M
        oore, Bush, Johnston, Jim Reardon, Josie Trinidad, and Jennifer Lee.`
            current=true;
          } 

      if(screenSize <= 1024){
        change1.innerHTML = `Zootopia (titled Zootropolis or Zoomania in various regions is a 2016 American) computer-animated buddy cop action comedy film
        produced by Walt Disney Animation Studios and released by Walt Disney Pictures.`
          current=false;
      }
    }
screen_size();
  
 $(window).resize(function(){ 
      screen_size();
  }); 
});

