//스크롤 애니메이션


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

    

window.onload = function() {
    var container = document.getElementById('hmm_company');
    var options = {
        center: new daum.maps.LatLng(37.526683, 126.927176),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.526683, 126.927176); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });}