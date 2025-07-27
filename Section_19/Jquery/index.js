
$("h1").text("Bye");
$("button").text("Don't click me");
$("button").html("<em>Hey</em>");

$("a").attr("href","https://www.youtube.com")
$("a").text("Search");

$("h1").click(function(){
    $("h1").css("color","purple")
})

$("h1").click(function(){
    $("h1").css("color","purple");
})

$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("button").on("click",function(){
    $("h1").css("color","red");
    $("h1").slideUp().animate({opacity : 0.1}).slideDown().animate({opacity : 1});
});

// $("h1").before("<button>Before</button>")
// $("h1").after("<button>After</button>")


// $("h1").prepend("<button>prepend</button>")
// $("h1").append("<button>append</button>")


// $("button").remove();

