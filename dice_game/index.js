var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice"+randomNumber1+".png";
var randomPath1 = "images/"+randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomPath1);

// var randomNumber2 = Math.floor(Math.random()*6) +1;

// var randomImage2 = "dice"+ randomNumber2+".png";
// var randomPath2 = "images/"+randomImage2;
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomPath2);

// if(randomImage1 === randomImage2){
// 	document.querySelector("h1").innerHTML = "Draw !";
// }else if(randomImage1 > randomImage2){
// 	document.querySelector("h1").innerHTML = "🚩 Player 1 wins !"
// }else if(randomImage1< randomImage2){
// 	document.querySelector("h1").innerHTML = "Player 2 wins !🚩 "
// }
