var Randomnumber1 = Math.floor(Math.random() * 6) + 1;

var RandomImage = "dice" + Randomnumber1 + ".png";

var Randomimagesource = "images/" + RandomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", Randomimagesource);


var Randomnumber2 = Math.floor(Math.random() * 6) +1;

var randomImage2 = "dice" + Randomnumber2 + ".png";

var Randomimagesource1 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", Randomimagesource1);


if(Randomnumber1 > Randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"; 
}
else if(Randomnumber1 < Randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"; 
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}