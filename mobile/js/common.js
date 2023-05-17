//gnb

$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menu").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        var documentHeight =  $(document).height(); //전체페이지의 높이
        $("#gnb").css('height',documentHeight); 
 
       if(op==false){ //메뉴가 닫혀있는 상태에서 클릭하면
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
       }else{ //메뉴가 열려있는 상태에서 클릭하면
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
       }
 
    });
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false,false,false]; //가정법 false(2depth서브가 닫혀있는 상태) true(2depth서브가 열려있는 상태)
     var arrcount=onoff.length; //배열의 개수 6개
     
     //console.log(arrcount);
     
     $('#gnb .depth1 h3 a').click(function(e){ //1depth메뉴를 클릭하면
       e.preventDefault();
         var ind=$(this).parents('.depth1').index(); //0~5
         //var ind=$(this).index('#gnb .depth1 h3 a')
        // console.log(ind);
         
        if(onoff[ind]==false){ //1depth 메뉴의 서브가 닫혀있으면
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
          for(var i=0; i<arrcount; i++) onoff[i]=false; // 모든 배열값을 fALSE (닫힘) 상태로 만들고
          onoff[ind]=true; //자신에 대한 (열린)배열만 TRUE로 변경
            
          $(this).css('color','#005793')
          $('.depth1 span').html('<i class="fa-solid fa-plus"></i>'); 
          $(this).find('span').html('<i class="fa-solid fa-minus"></i>'); 
               
             
        }else{//1depth 메뉴의 서브가 열려있으면
            $(this).css('color','#333')
          $(this).parents('.depth1').find('ul').slideUp('fast'); //서브 닫기 
          onoff[ind]=false;   
            
          $(this).find('span').html('<i class="fa-solid fa-plus"></i>');   
          
        }
     });    
   
   });
 
//search
$('#btn').click(function(){
  var pname = $('#title').val();
  if(pname){ //검색어를 입력했으면
    location.href = 'http://daeun900.cafe24.com/mobile/sub2_3.html?pname='+  pname;
  }else{ //검색어를 입력하지 않았다면
    alert('검색어를 입력하세요');
  }
});

 
//TOPMOVE
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    
    if(scroll > 200){ // 300이상의 거리가 발생되면
        $('.top_move').fadeIn('slow');  // top 보이기    
    }else{
        $('.top_move').fadeOut('fast'); // top 감추기
    }
  });
  
  $('.top_move a').click(function(e){
    e.preventDefault();
    $("html,body").stop().animate(
      // 상단으로 스르륵 이동
      {
        scrollTop: 0,
      },
      1000
    ); //상단으로 스르륵 이동합니다.
  });
  
  
  //FAMILY
  $(".family").toggle(
    function (e) {
      e.preventDefault();
      $(".select .aList").fadeIn("fast");
      $(this).find(".icon").html('<i class="fa-solid fa-chevron-down"></i>');
    },
    function (e) {
      e.preventDefault();
      $(".select .aList").fadeOut("fast");
      $(this).find(".icon").html('<i class="fa-solid fa-chevron-up"></i>');
    }
  );

  //뒤로가기
  $('.backBtn').click(function(){

    history.back(-1);

   //history.go(-1);

  //history.back();

});