// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.250546, 127.072000);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"우리집"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "경기도 수원시 영통구 영통동 매영로 366 현대아파트 727동 1601호"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

