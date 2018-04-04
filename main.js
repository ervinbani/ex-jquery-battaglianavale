

$(document).ready(function() {

  var arraybomba=[];
  for(var i=0;i<15;i++){
    var num=random()
    if(!arraybomba.includes(num)){
    arraybomba.push(num);
    }
  }
  console.log(arraybomba);


  var bombe=0;
  var vuote=0;

  $(".colonna").click(function(){
    console.log($(this).attr("id"));

    var control=arraybomba.includes(parseInt($(this).attr("id")));



    if(control==true){

     $(this).css('background', 'red');
     bombe=bombe+1;
     $('#numbombe').html(bombe);

   }
     else   {
       $(this).css('background', 'green');
       voute=vuote+1;
       $('#casellevuote').html(vuote);

     }

  });
  $('#numbombe').css('background-color', 'red');

  $('#casellevuote').css('background-color', 'green');




  function random(){
    var randomnumber=Math.floor(Math.random()*64+1);

    return randomnumber;
  }
});
