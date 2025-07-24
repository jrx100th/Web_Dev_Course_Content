var randomNumber1 = Math.floor(Math.random()*6)+1;

function changing_img1(){
// can also be done as randomImageSource1 = "images/" + "dice" + randomNumber1 + ".png";
    if (randomNumber1 === 1){
        document.querySelector(".img1").src = "./images/dice1.png";
    }
    else if (randomNumber1 === 2){
        document.querySelector(".img1").src = "./images/dice2.png";
    }
    else if (randomNumber1 === 3){
        document.querySelector(".img1").src = "./images/dice3.png";
    }
    else if (randomNumber1 === 4){
        document.querySelector(".img1").src = "./images/dice4.png";
    }
    else if (randomNumber1 === 5){
        document.querySelector(".img1").src = "./images/dice5.png";
    }
    else{
        document.querySelector(".img1").src = "./images/dice6.png";
    }
}

var randomNumber2 = Math.floor(Math.random()*6)+1;
// can also be done as randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

function changing_img2(){

    if (randomNumber2 === 1){
        document.querySelector(".img2").src = "./images/dice1.png";
    }
    else if (randomNumber2 === 2){
        document.querySelector(".img2").src = "./images/dice2.png";
    }
    else if (randomNumber2 === 3){
        document.querySelector(".img2").src = "./images/dice3.png";
    }
    else if (randomNumber2 === 4){
        document.querySelector(".img2").src = "./images/dice4.png";
    }
    else if (randomNumber2 === 5){
        document.querySelector(".img2").src = "./images/dice5.png";
    }
    else{
        document.querySelector(".img2").src = "./images/dice6.png";
    }
}
// var image1 = document.querySelectorAll("img")[0] // chooses the first element from the array
// var image2 = document.querySelectorAll("img")[1]
// image1.setAttribute("src",randomImageSource1)
// image2.setAttribute("src",randomImageSource2)
changing_img1();
changing_img2();

function refresh_titlle(){
    if (randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "Draw!"
    }
    else if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩 Player 1 Wins !"
    }
    else{
        document.querySelector("h1").textContent = "Player 2 Wins 🚩!"
    }
}

refresh_titlle();