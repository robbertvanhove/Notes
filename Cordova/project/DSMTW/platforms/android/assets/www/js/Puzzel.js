var Puzzel = function () {
    var puzzelstukken = new Array();
    var keywords = new Array();
    var aantalJuist = 0;

    //public
    var init = function () {
        $("#puzzelInput").hide();
        $("#puzzelToon").hide();
        $("#puzzelStart").show();
    };

    var start = function () {
        _getPuzzel();
        if (_validateInput()) {
            //puzzel en antwoorden in html steken
            _showPuzzel();
            _showAntwoorden();

            // puzzel
            $("#puzzelInput").hide();
            $("#puzzelToon").show();
        } else {
            Materialize.toast("Gelieve alles in te vullen!") //melding tonen om alles in te vullen

            puzzelstukken = new Array();
            keywords = new Array();
        }

    };

    var reset = function () { //reset alle arrays + laat startscherm zien
        init(); //startscherm laten zien

        //variabelen resetten
        puzzelstukken = new Array();
        keywords = new Array();
        aantalJuist = 0;


        //html leegmaken
        $("#puzzel").html("");
        $("#antwoordenPuzzel").html("");
        $(".answerP, .sleutelwoord").val("");
        $("#s1, #s2, #s3").each(function () {
            $(this).html($(this).data("text"));
        });

    };
    /**
     * @param  {} knop
     */
    var checkAnswer = function (knop) {
        var href = knop.attr("href");
        id = knop.data("id");
        var puzzelstuk = puzzelstukken[id];
        var kleur;
        console.log(puzzelstuk);
        

        //sleutels aanduiden
        puzzelstuk.kernwoorden.forEach(function (key) {
            $("#puzzel").find('td').each(function () {
                var antwoord = $(this).text();

                if (antwoord == key) {
                    kleur = knop.data("color");
                    $(this).css("color", kleur);
                }
            });
        }, this);

        //antwoord tonen
        knop.siblings().removeClass("blurry");
        knop.siblings().css("color", kleur);
        knop.removeClass("red").addClass("green");
        knop.find("i").html("check");

        aantalJuist++;
    };

    var viewAnswers = function () {
        if ($(".answerPuzzel").hasClass("blurry")) {
            $(".answerPuzzel").removeClass("blurry");
        } else {
            $(".answerPuzzel").addClass("blurry");
        }
    };

    var selectRandomPuzzel = function () {
        var counter = 0;
        var question;
        var answer = [];

        var vraagInput = this.inputVraag;
        var antwoordInput = this.inputAntwoorden;

        function getData() {
            return $.ajax({
                url: "http://robbertvanhove.ddns.net/dsmtw/randomPuzzel.php",
                dataType: 'json',
            });
        }

        getData().done(function (data) {
            $(".collapsible > li > div > ul").each(function () {

                var oplossing = data[counter].oplossing;
                $(this).find("li > input.sleutelwoord").val(oplossing);
                $("#s" + (counter + 1)).html(oplossing);


                var antwoorden = new Array();
                data[counter].antwoorden.forEach(function (i) {
                    antwoorden.push(i);
                }, this);

                console.log(antwoorden);
                counterAntwoorden = 0;
                $(this).find("li > input.answerP").each(function () {
                    $(this).val(antwoorden[counterAntwoorden].stuk);
                    counterAntwoorden++;
                });

                counter++;
            });

        });
    };


    //private
    var _getPuzzel = function () { //haalt alle sleutelwoorden + kernwoorden op
        $(".collapsible > li > div > ul").each(function () {
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

    var _showPuzzel = function () { //toont de puzzel in de tabel
        var html = "<tr>";
        var teller = 1;
        var keys = _shuffle(keywords); //kernwoorden randomizen

        
        

        keys.forEach(function (key) { //tabel opvullen
            //kleur selecteren
            

            html += "<td>" + key + "</td>";

            if (teller % 3 == 0) { // elke 3 woorden nieuwe rij
                html += "</tr><tr>";
            }
            teller++;
        }, this);

        html += "</tr>";

        $("#puzzel").html(html);
        
    };

    var _showAntwoorden = function () { //toont antwoorden in ul
        var teller = 0;
        var kleuren = ["#609140", "#7ca1aa", "#fab665"]

        puzzelstukken.forEach(function (e) {
            $("<li></li>").html("<button data-id='" + teller +
                "' class='check btn red antwoordBtn' data-color='"
                + kleuren[teller]
                + "'><i class='material-icons'>clear</i></button> <span class='answerPuzzel blurry'>" +
                e.sleutel +
                "</span>").appendTo("#antwoordenPuzzel");
            teller++;
        }, this);
    };

    var _shuffle = function (o) { //randomizet array
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var _validateInput = function () { // valideert alle input fields; geeft false terug als niet alles is ingevuld
        var valid = true;
        var inputs = new Array();

        //controle alles ingevuld
        $("#puzzelInput").find("input").each(function () {
            console.log($(this).val());
            if ($(this).val() == "") {
                valid = false;
            }
        });

        //controle dubbele waardes


        return valid;
    };


    return {
        init: init,
        start: start,
        reset: reset,
        checkAnswer: checkAnswer,
        viewAnswers: viewAnswers,
        selectRandomPuzzel: selectRandomPuzzel

    }
}();