$(function(){
    var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname'
    value = params.split("=")[1];  // '베이스'
    }   
    getParams();  //함수호출




    //jquery Ajax 문법형식
    /*
    $.ajaxx({
        url: json 파일 경로,
        dataType: 파일 종류,
        success: function(data){ // 파일의 접근이 완료되면 data 매개변수에 json 파일의 객체배열 데이터가 저장됨 
        }

    })
    */

   $.ajax({
       url: './js/sub2_3.json',
       dataType: 'json',
       success: function(data){
           var useData = data.terminal; //객체배열 저장
           
           function dataPrint(arr){
               
                   var txt = '<ul>';
                   
                   for(var i in arr){ //for(var i=0; i<useData.length; i++)
                       
                       var $Name = arr[i].Name;
                       var $Address = arr[i].Address;
                       var $Tel = arr[i].Tel;

                       txt+='<li>';
                       txt+='<dl>';
                       txt+='<dt>'+$Name+'</dt>'; 
                       txt+='<dd> <b>Address</b> '+$Address+'</dd>';
                       txt+='<dd> <b>Tel.</b> '+$Tel+'</dd>';
                       txt+='</dl>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.terminal_list').html(txt);
              
           };
           

           var newArray = [];
           //초기실행, 함수호출
            
           if(value){
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){
                    return element.Name.includes(value);
                });
                //console.log(newArray);

                if(newArray.length!=0){
                    dataPrint(newArray);
                }else{
                    $('.terminal_list').html('<span style="display:block;text-align:center; font-size:20px;font-weight:500 color:#005793; padding:20px 0">검색된 터미널이 없습니다</span>');
                }
           }else{ 
                dataPrint(useData); 
           }


           $('#btn2').click(function(){ //검색 버튼 클릭

            var newArray = useData.filter(function(element){
            
            //return element.Name == $('#title').val();
            return element.Name.includes($('#title2').val());
            }); //포함만 되어있으면 
            
            if(newArray.length!=0){
                dataPrint(newArray); //검색된 배열 보이기
            }else{
                $('.terminal_list').html('<span style="display:block;text-align:center; font-size:20px;font-weight:500 ;color:#005793; padding:20px 0">검색된 터미널이 없습니다</span>');
            }
   
           });

           $('.btn_all').click(function(){  //모두보기
               dataPrint(useData);
           });
       } 
   });
   $('.terminal_search dl dd a').click(function(e){
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
    location.href = 'http://daeun900.cafe24.com/mobile/sub2_3.html?pname='+  ch;
});
    
});