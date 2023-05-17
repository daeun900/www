$(document).ready(function () {

    var cnt = 2; //탭메뉴 개수 ***
    $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('#content .tab1').css('color', '#1979bd').css('font-weight', '500').css('opacity', '1'); //첫번째 탭메뉴 활성화
    $('#content .tab1').addClass('afline')
  
    $('#content .tab').each(function (index) { // index=0 1 2 3
      $(this).click(function (e) { //각각의 탭메뉴를 클릭하면... 
        e.preventDefault(); // <a> href="#" 값을 강제로 막는다 
  
        $("#content .contlist").hide(); //모든 탭내용을 안보이게...
        //$(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
        $("#content .contlist:eq(" + index + ")").fadeIn('slow');
        $('.tab').css('color', '#666').css('font-weight', '400').css('opacity', '.6'); //모든 탭메뉴를 비활성화
        $('.tab').removeClass('afline').mouseover(function () {
          $(this).css('opacity', '1')
        }).mouseleave(function () {
          $(this).css('opacity', '.6')
        })
  
        $(this).css('color', '#1979bd').css('font-weight', '500').css('opacity', '1'); // 클릭한 해당 탭메뉴만 활성화
        $(this).addClass('afline').mouseleave(function () {
          $(this).css('opacity', '1')
        })
      });
    });
});


//chart1
{
const data = { 
  labels:  [
    '2017','2018','2019','2020','2021'],
  datasets: [{
    label: '매출액',
    data: [5028,5222,5513,6413,13794],
    backgroundColor: [
      'rgba(255, 99, 132, .8)'
    ],

    barThickness:50
  }]
};
      
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


const myChart = new Chart(
      document.getElementById('chart1'),
      config
);
}


//chart2
{
const data = {
  labels:  [
'2017','2018','2019','2020','2021'],

datasets: [{
label: '영업이익률(%)',
data: [-8.1, -10.7, -5.4, 15.3, 53.5],
fill: false,
borderColor: 'rgb(75, 192, 192)',
tension: 0,

}]
};
      
const config = {
type: 'line',
data: data,
};

const myChart = new Chart(
      document.getElementById('chart2'),
      config
);
}

//chart3
{
  const data = {
    labels:  [
  '2017','2018','2019','2020','2021'],
  
  datasets: [{
  label: '부채비율(%)',
  data: [302, 296, 557, 455, 73],
  fill: false,
  borderColor: 'rgba(255, 99, 132)',
  tension: 0,
  
  }]
  };
        
  const config = {
  type: 'line',
  data: data,
  };
  
  const myChart = new Chart(
        document.getElementById('chart3'),
        config
  );
  }

  //chart4
  {
    const data = {
      labels:  [
    '2017','2018','2019','2020','2021'],
    
    datasets: [{
    label: '자기자본비율(%)',
    data: [24, 25, 15, 18, 57],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0,
    
    }]
    };
          
    const config = {
    type: 'line',
    data: data,
    };
    
    const myChart = new Chart(
          document.getElementById('chart4'),
          config
    );
    }