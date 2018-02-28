function Vraag(startDiv, inputDiv, showDiv, inputVraag, inputAntwoorden, output) {
    this.startDiv = startDiv;
    this.inputDiv = inputDiv;
    this.showDiv = showDiv;

    this.inputVraag = inputVraag;
    this.inputAntwoorden = inputAntwoorden;
    this.output = output;


    this.vraag;
    var antwoorden = new Array();


    this.init = function () {
       this.navigate(true, false, false);
    };


    this.navigate = function (start, input, show) {
        if (start) { //start tonen/verbergen
            $(this.startDiv).show();
        } else {
            $(this.startDiv).hide();
        }

        if (input) { //input tonen/verbergen
            $(this.inputDiv).show();
        } else {
            $(this.inputDiv).hide();
        }

        if (show) { //output tonen/verbergen
            $(this.showDiv).show();
        } else {
            $(this.showDiv).hide();
        }


    };

    this.start = function () {

        //input ophalen
        this.vraag = $(this.inputVraag).val(); // vraag ophalen
        $(this.inputAntwoorden).each(function () { //antwoorden ophalen
            console.log($(this).val());
            antwoorden.push($(this).val());
        });

        console.log(this.vraag);
        console.log(antwoorden);


        //output tonen
        $("<h4></h4>").html(this.vraag).appendTo(this.output);
        
        var lijstAntwoorden = $("<ul></ul>");

        if(antwoorden.length > 4) {
            lijstAntwoorden.addClass("split-list");
        }

        

        antwoorden.forEach(function(antwoord){
            var html = "<button class='check btn red'><i class='material-icons'>clear</i></button> "
            + antwoord;
            $("<li class='answer-check'></li>").html(html).appendTo(lijstAntwoorden);
        });

        lijstAntwoorden.appendTo(this.output);
        

    };

    this.reset = function () {
        //variabelen resetten
        this.vraag = "";
        antwoorden = new Array();

        //elementen leegmaken
        $(this.output).empty();
        $(this.inputVraag).val("");
        $(this.inputAntwoorden).val("");

    };

    this.controleInput = function(){
        var filledIn = true;

        if($(this.inputVraag).val() == "") { //controle vraag ingevuld
            filledIn = false;
        }

        $(inputAntwoorden).each(function(){
            if($(this).val() == ""){
                filledIn = false;
            }
        });

        return filledIn;
    };
}