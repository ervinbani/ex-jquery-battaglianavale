

$(document).ready(function() {


  $(".colonna").click(function(){
    console.log($(this).text());
    var control=arraybomba.includes($(this).text());


    if(control==true){
     $(this).css('background', 'red');
   }
     else   {
       $(this).css('background', 'green');
     }

  });


});
var arraybomba=[];
for(var i=0;i<15;i++){
  var num=random()
  if(!arraybomba.includes(num)){
  arraybomba.push(num);
  }
}
function random(){
  var randomnumber=Math.floor(Math.random()*64+1);

  return randomnumber;
}
console.log(arraybomba);
