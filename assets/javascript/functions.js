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

        $("#FirstPart").hide();
        $("#Questions").show();

        
        var Q = "";
        var arrQ = [];
        // var queryURL = "http://numbersapi.com/"+ResponseNumb+"/trivia";

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        //     }).then(function(response) {

            QuestionText = ArrQuestions[ResponseNumb];


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
        // });

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

var ArrQuestions = {0: "0 is the coldest possible temperature old the Kelvin scale.",
1: "1 is the number of Gods in monotheism.",
3: "3 is the number of semicircular canals a human ear has.",
2: "2 is the number of polynucleotide strands in a DNA double helix.",
4: "4 is the number of human blood groups (A, B, O, AB).",
5: "5 is times Muslims pray to Allah a day.",
6: "6 is the highest number on one end of a standard domino.",
8: "8 is the number of principles of Yong in Chinese calligraphy.",
7: "7 is the number of main islands of mythological Atlantis.",
9: "9 is the number of innings in a regulation, non-tied game of baseball.",
11: "11 is the number of players in a field hockey team.",
10: "10 is the number of Provinces in Canada.",
12: "12 is the number of months in a year.",
13: "13 is the Youngest age a minor can rent or purchase a T rated game by the ESRB without parental (age 18 or older) consent.",
16: "16 is the number of personality types in the Myers-Briggs classification system.",
17: "17 is the maximum number of strokes of a Chinese radical.",
14: "14 is the number of days in a fortnight.",
15: "15 is the age for obtaining a driver's (or learner's) permit in certain jurisdictions, including some where the age for a driver's license is sixteen."
,18: "18 is the number of levels in hell in the Chinese mythos."
,19: "19 is the final year a person is a teenager."
,21: "21 is the number of points required to win a game in badminton and table tennis (before 2001)."
,20: "20 is the number of ounces in Venti size coffees at Starbucks coffee shops."
,22: "22 is the typical (minimum) number of episodes in a season for a television program broadcast on a major American network."
,23: "23 is the number of crosses on Calvary in the Monty Python film Life Of Brian."
,24: "24 is the number of teams that participated in each FIFA World Cup finals tournament between 1982 and 1994."
,25: "25 is the percentage of all scald burns to children from hot tap water."
,27: "27 is the number of countries in the European Union (as of August 2011)."
,26: "26 is the number of letters in the Latin-derived English alphabet."
,29: "29 is the number of days it takes Saturn to orbit the Sun."
,28: "28 is the number of Chinese constellations, Xiu or mansions (a literal translation), equivalent to the 12 western zodiac constellations."
,30: "30 is the number of variations in Bach's Goldberg Variations."
,31: "31 is the number of days in the months January, March, May, July, August, October and December."
,32: "32 is the number of rays in the Japanese Rising Sun on the cover of Incubus' 2006 album Light Grenades."
,35: "35 is the basic film gauge in mm most commonly used for both analog photography and motion pictures."
,34: "34 is the lucky number of Victor Pelevin's protagonist Stepan Mikhailov in the novel Numbers."
,33: "33 is the temperature at which water boils according to the Newton scale."
,36: "36 is the perfect score on the ACT."
,37: "37 is the cost in cents of the Whopper Sandwich when Burger King first introduced it in 1957."
,38: "38 is the number of slots on an American Roulette wheel (0, 00, and 1 through 36; European roulette does not use the 00 slot and has only 37 slots)."
,39: "39 is the number of Scud missiles which Iraq fired at Israel during the Gulf War in 1991."
,40: "40 is the number of positions on a number of radio countdown programs, most notably American Top 40 and American Country Countdown."
,42: "42 is the number of gallons that one barrel of petroleum holds."
,41: "41 is the number of soldiers in The Expendables (2010 film) tactor Eric Roberts laments to his subordinates about having been killed by star Sylvester Stallone in his escape from their island."
,43: "43 is the maximum number of cars participating in a NASCAR race in the Cup Series or Nationwide Series."
,44: "44 is the number of candles in a box of Hanukkah candles."
,45: "45 is the sapphire wedding anniversary in years of marriage."
,46: "46 is the number of samurai, out of 47, who carried out the attack in the historical Ako vendetta."
,47: "47 is the number of phonemes in English phonology in Received Pronunciation."
,48: "48 is the number of Ptolemaic constellations."
,49: "49 is the number of days and night Siddhartha Gautama spent meditating as a holy man."
,51: "51 is the atomic number of antimony."
,50: "50 is the approximate number of times a mother hen turns her egg in a day so the yolk does not stick to the shell."
,52: "52 is the number of white keys (notes in the C major scale)."
,54: "54 is the number of countries in Africa."
,53: "53 is the number of bytes in an Asynchronous Transfer Mode packet."
,55: "55 is the number of Delegates who attended the United States Constitutional Convention in 1787."
,56: "56 is the maximum speed of analog data transmission over a POTS in the 20th century measured in kbit/s."
,57: "57 is the number of cm that the smallest man measured, Gul Mohammed (1957-1997) of India."
,58: "58 is the minimum wind speed (mph) needed to issue a Severe Thunderstorm Warning."
,59: "59 is the number of days, approximately in two lunar months."
,60: "60 is the years of marriage until the diamond wedding anniversary."
,61: "61 is the code for international direct dial phone calls to Australia."
,63: "63 is the atomic number of europium."
,62: "62 is the atomic number of samarium."
,64: "64 is the number of classical arts listed in many Indian scriptures."
,65: "65 is the traditional age for retirement in the United Kingdom, Germany and other countries."
,66: "66 is the number of years of the longest hiccups on record by an American pig farmer from 1922 to 1987."
,67: "67 is the highest two-digit odd number not presently designating any highway in the Interstate Highway System of the United States."
,68: "68 is the ideal temperature (F) for developing black-and-white film."
,69: "69 is the atomic number of thulium, a lanthanide."
,70: "70 is the distance (meter) from archer to targets in Olympic Archery."
,72: "72 is the speed in miles per hour that cheetahs, the fastest land animal, can reach."
,71: "71 is the atomic number of lutetium."
,73: "73 is the percentage of girls in Bangladesh that are married by age 18."
,74: "74 is the atomic number of tungsten."
,75: "75 is the age in years that the Saguaro Cactus, found in southwestern US, must be to grow branches."
,76: "76 is the atomic number of osmium."
,78: "78 is the total number of gifts in the song The Twelve Days of Christmas."
,77: "77 is the atomic number of iridium."
,79: "79 is the record for cumulative weeks at #1 on the Billboard charts, held by Elvis Presley."
,80: "80 is the standard TCP/IP port number used for HTTP connections."
,81: "81 is the number of squares on a shogi playing board."
,82: "82 is the atomic number of lead."
,83: "83 is the atomic number of bismuth."
,84: "84 is the code for international direct dial phone calls to Vietnam."
,85: "85 is the IQ and nickname of Aaron in Alien 3."
,86: "86 is the device number for a lockout relay function in electrical circuit protection schemes."
,87: "87 is the number of tools in the Wenger Swiss Army Knife version XXL, listed in the Guinness Book of World Records as the world's most multi-functional penknife."
,88: "88 is the number of constellations in the sky as defined by the International Astronomical Union."
,89: "89 is the atomic number of actinium."
,90: "90 is the latitude of the North Pole and the South Pole."
,91: "91 is the code for international direct dial phone calls to India."
,92: "92 is the number of letters in the longest place name: Taumatawhakatangihangakoauauotamateaurehaeaturipukakapikimaungahoronukupokaiwhenuakitanatahu."
,94: "94 is the atomic number of plutonium."
,93: "93 is the atomic number of neptunium."
,95: "95 is the NBA record for Most Assists in a 7-game playoff series (by Magic Johnson of the Los Angeles Lakers in 1984)."
,96: "96 is the rating of Skyrim on metacritic.com."
,97: "97 is the number of minutes it takes the Hubble space telescope to complete an orbit around the Earth."
,98: "98 is the highest jersey number allowed in the National Hockey League (as 99 was retired by the entire league to honor Wayne Gretzky)."
,99: "99 is a common price ending in psychological pricing."
,100: "100 is the number of pounds in an American short hundredweight."}