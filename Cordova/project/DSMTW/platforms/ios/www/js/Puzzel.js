var Puzzel = function () {
    var puzzelstukken = new Array();
    var keywords = new Array();


    //public
    var init = function () {
        $("#puzzelInput").hide();
        $("#puzzelToon").hide();
        $("#puzzelStart").show();
    };

    var start = function () {
        _getPuzzel();
        _showPuzzel();
        _showAntwoorden();
    };

    var reset = function() {
        init(); //startscherm laten zien
        
        //arrays resetten
        puzzelstukken = new Array();
        keywords = new Array();

        //html leegmaken
        $("#puzzel").html("");
        $("#antwoordenPuzzel").html("");
        
    };




    //private
    var _getPuzzel = function () {
        $(".card-content > div > ul").each(function () {
            var sleutel = $(this).find("li > input.sleutelwoord").val(); //alle sleutelwoorden ophalen
            console.log(sleutel);
            var kernwoorden = new Array();

            $(this).find("li > input.answerP").each(function () { // alle kernwoorden ophalen
                var kernwoord = $(this).val();
                kernwoorden.push(kernwoord);
                keywords.push(kernwoord);
                console.log(kernwoord);
            });

            var puzzelstuk = { //object met sleutelwoord en bijbehorende sleutelwoorden
                sleutel: sleutel,
                kernwoorden: kernwoorden // array
            };

            puzzelstukken.push(puzzelstuk); // puzzelstuk toevoegen aan puzzelstukken

        });

        console.log(puzzelstukken);
        console.log(keywords);
    };

    var _showPuzzel = function () {
        var html = "<tr>";
        var teller = 1;
        var keys = _shuffle(keywords); //kernwoorden randomizen

        keys.forEach(function (key) { //tabel opvullen
            html += "<td>" + key + "</td>";

            if (teller % 3 == 0) {
                html += "</tr><tr>";
            }
            teller++;
        }, this);

        html += "</tr>";

        $("#puzzel").html(html);
    };

    var _showAntwoorden = function(){
        var teller = 0;
        puzzelstukken.forEach(function (e) {
            $("<li></li>").html("<a href='#" + teller +
                "' class='check btn red antwoordBtn'><i class='material-icons'>clear</i></a> <span class='blurry'>" +
                e.sleutel +
                "</span>").appendTo("#antwoordenPuzzel");
            teller++;
        }, this);
    };

    var _shuffle = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    

    return {
        init: init,
        start: start,
        reset: reset
    }
}();