var Puzzel = function () {
    var puzzelstukken = new Array();
    var keywords = new Array();
    var aantalJuist = 0;
    var startDiv;
    var inputDiv;
    var showDiv;

    //public
    /**
     * @param  {string} start - ID of div to show at start
     * @param  {string} input - ID of div where input is done
     * @param  {string} show - ID of div where puzzel is shown
     */
    var init = function (start, input, show) {
        startDiv = start;
        inputDiv = input;
        showDiv = show;
        Navigate(true, false, false);
    };

    /**
     * Gets values of all inputs
     * Shows puzzel in assigned element
     * Shows answers in assigned element
     */
    var start = function () {
        _getPuzzel();
        _showPuzzel();
        _showAntwoorden();
    };

    /**
     * Resets all input values
     * Resets necessary variables
     * Shows the start div
     */
    var reset = function () {
        Navigate(true, false, false);

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
     * changes color next to button
     * changes the color of the pieces in the puzzle assigned to this button
     * @param  {element} knop - button to work with
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
        knop.siblings().css("color", kleur);
        aantalJuist++;
    };

    /**
     * show/hide the blurred answers that aren't checked
     */
    var showToggle = function () {
        MyHelper.showToggle(".answerPuzzel");
    };

    /**
     * gets random puzzel answers from the database by AJAX
     * fills in the inputs
     */
    var selectRandomPuzzel = function () {
        var counter = 0;
        var question;
        var answer = [];

        var vraagInput = this.inputVraag;
        var antwoordInput = this.inputAntwoorden;

        $(".preloader-wrapper.wrapper-puzzel").show();

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

                $(".preloader-wrapper.wrapper-puzzel").hide();
            });
        });
    };

    /**
     * @param  {bool} start - decides wether to show the startDiv
     * @param  {bool} input - decides wether to show the inputDiv
     * @param  {bool} show - decides wether to show the showDiv
     */
    var Navigate = function (start, input, show) {
        var navigationArray = [{
                element: startDiv,
                show: start
            },
            {
                element: inputDiv,
                show: input
            },
            {
                element: showDiv,
                show: show
            }
        ];

        MyHelper.Navigation(navigationArray);
    };

    
    //private

    /**
     * Gets all the inputs and puts them in arrays to work with
     */
    var _getPuzzel = function () {
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

    /**
     * Makes the puzzel in the form of a table
     * Puts it on appropriate place in showDiv
     */
    var _showPuzzel = function () {
        var html = "<tr>";
        var teller = 1;
        var keys = MyHelper.Shuffle(keywords); //kernwoorden randomizen
        keys.forEach(function (key) { //tabel opvullen
            html += "<td>" + key + "</td>";
            if (teller % 3 == 0) { // elke 3 woorden nieuwe rij
                html += "</tr><tr>";
            }
            teller++;
        }, this);

        html += "</tr>";
        $("#puzzel").html(html);
    };

    /**
     * Makes the ul with answers
     * Puts it on appropriate place in showdiv
     */
    var _showAntwoorden = function () { //toont antwoorden in ul
        var teller = 0;
        var kleuren = ["#609140", "#7ca1aa", "#fab665"]

        puzzelstukken.forEach(function (e) {
            $("<li></li>").html("<button data-id='" + teller +
                "' class='check btn red antwoordBtn' data-color='" +
                kleuren[teller] +
                "'><i class='material-icons'>clear</i></button> <span class='answerPuzzel blurry'>" +
                e.sleutel +
                "</span>").appendTo("#antwoordenPuzzel");
            teller++;
        }, this);
    };


    /** 
     * Checks all inputs in inputDiv for empty values
     * returns false if there is an empty value
     */
    var ValidateInput = function () { // valideert alle input fields; geeft false terug als niet alles is ingevuld
        var valid = true;
        var inputs = new Array();

        //controle alles ingevuld
        $(inputDiv).find("input").each(function () {
            console.log($(this).val());
            if ($(this).val() == "") {
                valid = false;
            }
        });
        if (MyHelper.HasDuplicates(keywords)) {
            valid = false;
        }
        return valid;
    };

    return {
        init: init,
        start: start,
        reset: reset,
        checkAnswer: checkAnswer,
        showToggle: showToggle,
        selectRandomPuzzel: selectRandomPuzzel,
        Navigate: Navigate,
        ValidateInput: ValidateInput
    }
}();