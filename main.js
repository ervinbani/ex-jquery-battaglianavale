

$(document).ready(function() {

  var arraybomba=[];//array vuoto dove vado a memorizzare i valori random
  for(var i=0;i<15;i++){//ciclo for
    var num=random()
    if(!arraybomba.includes(num)){
    arraybomba.push(num);
    }
  }
  console.log(arraybomba);

//variabile che conta il numero delle bombe
  var bombe=0;
  //variabile per memorizzare il numero
  var vuote=0;


  $(".colonna").click(function(){
    console.log($(this).attr("id"));

    var control=arraybomba.includes(parseInt($(this).attr("id")));



    if(control==true){

     $(this).css('background', 'red');
     bombe=bombe+1;
     $('#numbombe').html(bombe);

   }
     else  {
       $(this).css('background', 'green');
       vuote=vuote+1;
       $('#cellevuote').html(vuote);

     }

  });
  $('#numbombe').css('background-color', 'red');

  $('#casellevuote').css('background-color', 'green');




  function random(){
    var randomnumber=Math.floor(Math.random()*64+1);

    return randomnumber;
  }
});
