var OpenDeur = function () {
    var question;
    var answers = new Array();
    //public
    var init = function () {
        $("#OpenDeurVraagInput").hide();
        $("#OpenDeurToon").hide();
    };

    var start = function () {
        _getQuestion();

        if (_controleEmpty()) {
            $("#OpenDeurVraagInput").hide();
            $("#OpenDeurToon").show();
           
            _show();
        } else {
            answers = new Array();
            toastr.error("Vul alles in!");
        }

    };

    var reset = function () {
        answers = new Array();
        question = "";
        init();
        $("#openDeurStart").show();
        $("#vraag").html("");
    };



    //private
    var _getQuestion = function () {
        question = $("#openDeurVraag").val(); //vraag ophalen
        console.log(question);
        $(".answerOD").each(function () { //antwoorden ophalen
            answers.push($(this).val());
        });
        console.log(answers);

    };

    var _show = function () {
        $('<h4></h4>').html(question).appendTo("#OpenDeurToon > #vraag"); //titel tonen
        var lijstAntwoorden = $("<ul class='align-center'></ul>");
        answers.forEach(function (answer) {
            var html = "<button class='check btn red'><i class='material-icons'>clear</i></button> " 
            + answer;
            $("<li class='answer-check'></li>").html(html).appendTo(lijstAntwoorden); //lisst maken met antwoorden
        });

        lijstAntwoorden.appendTo("#OpenDeurToon > #vraag"); //lijst tonen
        
    };

    var _controleEmpty = function () {
        var filledIn = true;
        answers.forEach(function (answer) { //antwoorden ophalen
            console.log(answer);
            if (answer == "") {
                filledIn = false;
                console.log("niet ingevuld");
            }
        });
        return filledIn;
    };


    return {
        init: init,
        getQuestion: _getQuestion,
        start: start,
        reset: reset

    };
}();