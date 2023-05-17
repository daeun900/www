// 변수 설정 
let screenSize, screenHeight;
const headerArea = document.querySelector('#headerArea');
const gnb = document.querySelector('#gnb');
const menuTrigger = document.querySelector('.menuTrigger');


// Show and Hide 함수
// Show
const show = function (elem) {
	elem.style.display = 'block';
};

// Hide
const hide = function (elem) {
	elem.style.display = 'none';
};


// navigation
let navCurrent = 0;
function screenW(){
    screenSize = window.innerWidth;
    screenHeight = window.innerHeight;
    if (screenSize > 640){
        show(gnb);
        navCurrent = 1;
    }
    if (navCurrent == 1 && screenSize < 640){
        hide(gnb);
        navCurrent = 0;
    }

}

window.addEventListener("resize", screenW);

// 햄버거메뉴
let op = false; //네비가 열려있으면(true) 닫혀있으면(false)
menuTrigger.addEventListener('click', function(e){
    e.preventDefault();

    if(op == false) {
        show(gnb);
        gnb.animate([
            { left: "100%" },
            { left: "0" }
        ], {
            duration: 200,
            fill: "forwards"
        });
        headerArea.classList.add('mnOpen');
        op=true;     
    } else {
        gnb.animate([
            { left: "0"},
            { left: "100%"}
        ], {
            duration: 200,
            fill: "forwards"
        });
        headerArea.classList.remove('mnOpen');   
        op=false;  
    }
});



//goToTop
$('.top').hide();
           
$(window).on('scroll',function(){ //스크롤 값의 변화
     var scroll = $(window).scrollTop(); //스크롤의 거리 담는 변수처리
     if(scroll>1000){ 
         $('.top').fadeIn('slow');  //top버튼 보임
     }else{
         $('.top').fadeOut('fast'); //top버튼 안보임
     }
});

 $('.top').click(function(e){ //클릭시 상단이동->이동시 스무스하게 올라가게 처리
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":0},1000); 
 });

 //headerOn
 var visHeight, screenHeight2;

 // 사이즈 받아오기
 function reSize(){
     visHeight = $('.videoBox').height();
     screenHeight2 = $(window).height();  //스크린의 높이
 }
 reSize();

 // 창 사이즈 변경 시 사이즈 다시 받아오기
 $(window).resize(function(){
     reSize();
 });

 /* 헤더 on 추가 */
 $(document).scroll(function(){

     var windowTop = $(window).scrollTop();
     if(windowTop > visHeight-150){
         $('#headerArea').addClass('on');
     } else {
         $('#headerArea').removeClass('on');
     }

 });