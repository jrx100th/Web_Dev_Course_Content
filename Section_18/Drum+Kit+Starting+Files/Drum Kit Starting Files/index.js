var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (i = 0; i < numberOfDrumButtons ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
// detects button press
function handleClick(){

    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
        case "w": 
            var a1 = new Audio("./sounds/tom-1.mp3");
            a1.play();
            break;
        case "a":
            var a2 = new Audio("./sounds/tom-2.mp3");
            a2.play();
            break;
        case "s":
            var a3 = new Audio("./sounds/tom-3.mp3");
            a3.play();
            break;
        case "d":
            var a4 = new Audio("./sounds/tom-4.mp3");
            a4.play();
            break;
        case "j":
            var a5 = new Audio("./sounds/snare.mp3");
            a5.play();
            break;
        case "k":
            var a6 = new Audio("./sounds/crash.mp3");
            a6.play();
            break;
        case "l":
            var a7 = new Audio("./sounds/kick-bass.mp3");
            a7.play();
            break;
        default: console.log(buttonInnerHTML)
            break;
    }
}

// detects keyboard press
document.addEventListener("keydown",function(event){
    var button_clicked = event.key;
    buttonAnimation(event.key);

    switch (button_clicked) {
        case "w": 
            var a1 = new Audio("./sounds/tom-1.mp3");
            a1.play();
            break;
        case "a":
            var a2 = new Audio("./sounds/tom-2.mp3");
            a2.play();
            break;
        case "s":
            var a3 = new Audio("./sounds/tom-3.mp3");
            a3.play();
            break;
        case "d":
            var a4 = new Audio("./sounds/tom-4.mp3");
            a4.play();
            break;
        case "j":
            var a5 = new Audio("./sounds/snare.mp3");
            a5.play();
            break;
        case "k":
            var a6 = new Audio("./sounds/crash.mp3");
            a6.play();
            break;
        case "l":
            var a7 = new Audio("./sounds/kick-bass.mp3");
            a7.play();
            break;
        default: console.log(buttonInnerHTML)
            break;
    }
})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}





// var a1 = new Audio("./sounds/tom-1.mp3");
//     a1.play();