$("#Questions").hide();
$("#Response").hide();
$(".Game-Results").hide();


$("#button").on("click", function main(){
    right = 0;
    wrong = 0;
    unanswer = 0;
    QuestionNumb = 0;
        
    for(var i = 0; i<5; i++){
        PositionResp[i]= Math.floor(Math.random()*3.99);
    };
    
    NextQ();

});

$(".Response").on("click", function(){
    clearInterval(timer);
    Qtimer(5);
    $("#Questions").hide();
    $("#Response").show();
    if(($(this).attr("data-click") == PositionResp[QuestionNumb]) && QuestionNumb < 5 ){
        $(".ResponseTitle").text("Congratulations!");
        $(".ResponseText").text("That was correct!");
        
        clearInterval(timer);
        right++;
        QuestionNumb++;
        queryURL = "https://api.giphy.com/v1/gifs/search?api_key=TFi9rHvgaCJV26uk7uT6C6aM1JlSFryF&q=Correct&limit=25&offset=0&rating=G&lang=en"
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                $(".ResponseGif").attr("src",response.data[Math.floor(Math.random()*10)].images.original.url)
            
        });

        setTimeout(function(){
            NextQ();
            $(".ResponseGif").attr("src","");
            $("#Response").hide();
        },5000);
    }
    else if (QuestionNumb < 5) {
        
        clearInterval(timer);
        $(".ResponseTitle").text("You are Wrong!");
        $(".ResponseText").text("the answer was :"+ResponseNumb);
        wrong++;
        QuestionNumb++;

        queryURL = "https://api.giphy.com/v1/gifs/search?api_key=TFi9rHvgaCJV26uk7uT6C6aM1JlSFryF&q=wrong&limit=25&offset=0&rating=G&lang=en"
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                $(".ResponseGif").attr("src",response.data[Math.floor(Math.random()*10)].images.original.url)

        });
        setTimeout(function(){
            NextQ();
            $(".ResponseGif").attr("src","");
            $("#Response").hide();
        },5000);
    };



})