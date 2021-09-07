var random1 = Math.floor(Math.random()*6)+1;
var diceimage = "dice"+random1+".png";
var randomimg = "images/"+diceimage;
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomimg);

var random2 = Math.floor(Math.random()*6)+1;
var randomimage2="images/"+"dice"+random2+".png";
var image1 = document.querySelectorAll(".img2")[0];
image1.setAttribute("src", randomimage2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

