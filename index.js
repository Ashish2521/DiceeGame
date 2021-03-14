var randomNumber=Math.floor((Math.random()*6)+1);
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber+".png");
var randomNumber2=Math.floor((Math.random()*6)+1);
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber>randomNumber2){
document.querySelector("h1").innerHTML="✌️Player 1 Wins";
}else if(randomNumber===randomNumber2){
document.querySelector("h1").innerHTML="😔Draw😔";
}else{
  document.querySelector("h1").innerHTML="Player 2 ✌️ Wins";
}
