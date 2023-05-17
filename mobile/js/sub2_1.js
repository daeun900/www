//팝업 띄우기
$(document).ready(function(){
    var ind = 0;
    var total=3;
 
    $('.openBtn').on('click', function(e){
        e.preventDefault();
        
        $(this).parent('.text_box').next('.pop_up').fadeIn('slow'); //클릭한 버튼에 해당하는 팝업 찾아서 띄우기
      
    });
   
   $('.closeBtn, .box').on('click', function(e){
        e.preventDefault();
 
        $('.pop_up').fadeOut('fast');
   
   });
 
   ind = $('.pop_up').index('.pop_up');
 
   $('.pop_btn a').click(function(e){
    e.preventDefault();
 
    $('.pop_up').hide(); 
   
   if($(this).hasClass('prev')){ //이전버튼 클릭
       //if(ind==0)ind=memo.length;
       if(ind==0)ind=total; //2 1 0  2 1 0
       ind--;
       $('.pop_up:eq('+ ind +')').show(); 
       
   }else if($(this).hasClass('next')){ //다음버튼 클릭
       //if(ind==memo.length-1)ind=-1;
       if(ind==total-1)ind=-1;// 0 1 2  0 1 2  
       ind++;
       $('.pop_up:eq('+ ind +')').show(); 
       
   }
   console.log(ind);
 });
 });