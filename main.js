$(".button").on("click",function(){
    var nice = $(this).text(); 
    $("#display").append(nice);
    var audio = new Audio("./click.mp3")
    audio.play()
})

$("#equal").on("click",function(){
    var audio = new Audio("./electronic-hit-98242.mp3")
    audio.play()
    var jon = $("#display").text();
   try{var jas = math.evaluate(jon) ;}
   catch(err){$("#display").text("Syntax Error")}
   $("#display").removeClass("display");
   $("#display").addClass("puj");
   $("#display").text(jas);
   
})

$("#cSign").on("click",function(){
    var audio = new Audio("./click.mp3")
    audio.play()
    $("#display").text("");
    $("#display").addClass("display")
    $("#display").removeClass("puj");
})
