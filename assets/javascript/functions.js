var ResponseNumb

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var QuestionText ="";
var time = 25;
var timer;
var right = 0;
var wrong = 0;
var unanswer = 0;
var QuestionNumb = 0;
var PositionResp = [];
var ApiKey = "TFi9rHvgaCJV26uk7uT6C6aM1JlSFryF"


function Qtimer (x){
    time = x
    timer = setInterval(function(){
        time--;
        $("#Timer").text("Time left: "+time)

        if(time<0 && QuestionNumb<5){
            unanswer++;
            QuestionNumb++;
            $("#Questions").hide();
            $("#Response").show();
            clearInterval(timer);
            $(".ResponseTitle").text("Your time is Up!");
            $(".ResponseText").text("the answer was :"+ResponseNumb);

            setTimeout(function(){
                NextQ();
                $(".ResponseGif").attr("src","");
                $("#Response").hide();
            },5000);
            
            queryURL = "https://api.giphy.com/v1/gifs/search?api_key=TFi9rHvgaCJV26uk7uT6C6aM1JlSFryF&q=Time+out&limit=25&offset=0&rating=G&lang=en"
            $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                    $(".ResponseGif").attr("src",response.data[Math.floor(Math.random()*10)].images.original.url)
                
            });


        }
        else if(time<0){
            unanswer++;
            clearInterval(timer);
            $("#Questions").hide();
            $("#Response").hide();
            $("#FirstPart").show();
        
            $(".Results-Correct").text(right);
            $(".Results-UnAnswer").text(unanswer);
            $(".Results-Wrong").text(wrong);
            $(".Game-Results").show();
        };

    },1000);

};

function NextQ (){

    if (QuestionNumb<5){


        ResponseNumb = Math.floor(Math.random()*100);
        var Q = "";
        var arrQ = [];
        var queryURL = "http://numbersapi.com/"+ResponseNumb+"/trivia";

        $("#FirstPart").hide();
        $("#Questions").show();

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
            QuestionText = response;


            for (let i = 0; i < QuestionText.length ; i++) {
                if(numbers.includes(QuestionText[i]) && i<4){
                    arrQ.push("-");
                }
                else{
                    arrQ.push(QuestionText[i]);
                };
            };
            for (let i = 0; i < arrQ.length ; i++) {
                Q += arrQ[i];
            };

            $("#Question").text(Q);
        });

        Qtimer(10);

        setTimeout(function(){
            
            for(var i = 0; i<4; i++){
                $("#R"+i).text(Math.floor(Math.random()*100));
            };
            $("#R"+PositionResp[QuestionNumb]).text(ResponseNumb);

        },100);
    }
    else {    
        clearInterval(timer);
        $("#Questions").hide();
        $("#Response").hide();
        $("#FirstPart").show();

        $(".Results-Correct").text(right);
        $(".Results-UnAnswer").text(unanswer);
        $(".Results-Wrong").text(wrong);
        $(".Game-Results").show();
    }
};

