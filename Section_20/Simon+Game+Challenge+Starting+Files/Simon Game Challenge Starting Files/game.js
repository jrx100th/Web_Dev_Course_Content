
var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

var started = false;

var userProgress = true;

function buttonChoosen(rcc){
        $("#" + rcc).animate({ opacity: 0.1}, 50).animate({ opacity: 1});
        playSound(rcc);
    }

function playSound(name){
    var sound = new Audio("./sounds/"+name+".mp3")
    sound.play();
}

function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed");},100);
        }

function nextSequence(){
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    level++;
    $("h1").text("Level "+ level);
    gamePattern.push(randomChosenColour);

    buttonChoosen(randomChosenColour);

}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}



var userChosenColour;
$(".btn").click(function(){
    if (!started) return;
    userChosenColour = $(this).attr("id");
    playSound(userChosenColour)
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
});

$(document).one("keydown",function(){
    started = true;
    nextSequence();
    
});

function startOver(){
    gamePattern = [];
    started = false;
    level = 0
    $(document).one("keydown",function(){
    started = true;
    nextSequence();
    
});
}