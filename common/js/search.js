//팝업 띄우기
$(document).ready(function(){

    $('#headerArea .searchBtn').click(function(e){
        e.preventDefault();
        // $(".headerSearch").html(data);
        //console.log($('#headerSearch #search'));
        $('#headerSearch').slideDown();

        // 검색 닫기
        $('#headerSearch .closeBtn').click(function(e){
            e.preventDefault();
            $('#headerSearch').slideUp();                    
        });
    });

    $('#btn').click(function(){
        var pname = $('#title').val();
        if(pname){ //검색어를 입력했으면
          location.href = 'http://daeun900.cafe24.com/sub2/sub2_3.html?pname='+  pname;
        }else{ //검색어를 입력하지 않았다면
          alert('검색어를 입력하세요');
        }
    });
    $('#headerSearch dl dd a').click(function(e){
        e.preventDefault();

        var search_index = $(this).index(); // 0 1 2 3
        var ch='';
        if(search_index==0){
            ch='부산';
        }else if(search_index==1){
            ch='인천';
        }else if(search_index==2){
            ch='울산';
        }else if(search_index==3){
            ch='컨테이너';
        }
        location.href = 'http://daeun900.cafe24.com/sub2/sub2_3.html?pname='+  ch;
    });


});

