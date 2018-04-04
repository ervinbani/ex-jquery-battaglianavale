

$(document).ready(function() {

  var arraybomba=[];
  for(var i=0;i<15;i++){
    var num=random()
    if(!arraybomba.includes(num)){
    arraybomba.push(num);
    }
  }
  console.log(arraybomba);




  $(".colonna").click(function(){
    console.log($(this).html());
      
    var control=arraybomba.includes(parseInt($(this).html()));



    if(control==true){

     $(this).css('background', 'red');
   }
     else   {
       $(this).css('background', 'green');
     }

  });

  function random(){
    var randomnumber=Math.floor(Math.random()*64+1);

    return randomnumber;
  }
});
