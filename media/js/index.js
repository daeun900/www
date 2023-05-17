var s1 = $("#content .character").offset().top - 220 ;

//console.log(s5);

//JUDY
var s2 = $(".character .judy").offset().top + 150 ;
var s3 = $(".character .nick").offset().top + 300 ;
let clear1 , clear2;

const content = "In Zootopia Anyone can be Anything ".split("");
let typingBool = false;
let typingIdx = 0;


function typing () {
    if (typingIdx < content.length) {
        $(".judy_slogan p").append(content[typingIdx]);
        typingIdx++; 
    } 
    else{ 
        clearInterval(clear1);
        
    } 
}



 //NICK
const content2 = "Never let them see that they get to you".split("");
let typingBool2 = false;
let typingIdx2 = 0;

function typing2 () {
    if (typingIdx2 < content2.length) {
        $(".nick_slogan p").append(content2[typingIdx2]);
        typingIdx2++; 
    } 
    else{ 
        clearInterval(clear2);
    } 
}


$(window).on("scroll", function () {
            var scroll = $(window).scrollTop(); //스크롤 top의 높이

            //$(".topText").text(scroll); //스크롤 좌표의 값

            //스크롤의 거리의 범위를 처리

            if (scroll >= s1) {
                $(".ani2").addClass("on");
            } else if (scroll < s1) {
                $(".ani2").removeClass("on");
            } 

            if (scroll >= s2 && typingBool==false) {
                clear1 =  setInterval(typing, 100);
                typingBool=true;
            }
            if (scroll >= s3 && typingBool2==false) {
                clear2 =   setInterval(typing2, 100);
                typingBool2=true;
            }


});


//FLASH
var change1 = document.getElementById('change1');
function mouseover1 (){
    change1.setAttribute("src","./images/main/ch_flash_hover.png");
}

function mouseleave1 (){
    change1.setAttribute("src","./images/main/ch_flash.png");
}   


//BELLWETHER
var change2 = document.getElementById('change2');
function mouseover2 (){
    change2.setAttribute("src","./images/main/ch_bell_hover.png");
}

function mouseleave2 (){
    change2.setAttribute("src","./images/main/ch_bell.png");
}  


//FINNICK
var change3 = document.getElementById('change3');
function mouseover3 (){
    change3.setAttribute("src","./images/main/ch_finnick_hover.png");
}

function mouseleave3 (){
    change3.setAttribute("src","./images/main/ch_finnick.png");
}  


//MRBIG
var change4 = document.getElementById('change4');
function mouseover4 (){
    change4.setAttribute("src","./images/main/ch_mrbig_hover.png");
}

function mouseleave4 (){
    change4.setAttribute("src","./images/main/ch_mrbig.png");
}  

//JUDY
var change5 = document.getElementById('change5');
function mouseover5 (){
    change5.setAttribute("src","./images/main/ch_judy_hover.png");
}

function mouseleave5 (){
    change5.setAttribute("src","./images/main/ch_judy.png");
}  


//NICK
var change6 = document.getElementById('change6');
function mouseover6 (){
    change6.setAttribute("src","./images/main/ch_nick_hover.png");
}

function mouseleave6 (){
    change6.setAttribute("src","./images/main/ch_nick.png");
}  


//typing


   
    