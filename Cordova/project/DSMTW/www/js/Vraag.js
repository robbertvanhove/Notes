/** 
 * @param {string} startDiv - ID of the div that is shown at the start
 * @param {string} inputDiv - ID of the div where input is done
 * @param {string} showDiv - ID of the div where the questing is shown
 * @param {string} inputVraag - ID of the input for the question
 * @param {string} inputAntwoorden - Classname of the input for answers
 * @param {string} output - ID of the element where the question and answers are show
 */
function Vraag(startDiv, inputDiv, showDiv, inputVraag, inputAntwoorden, output, outputKlasse) {
    this.startDiv = startDiv;
    this.inputDiv = inputDiv;
    this.showDiv = showDiv;

    this.inputVraag = inputVraag;
    this.inputAntwoorden = inputAntwoorden;
    this.output = output;
    this.outputKlasse = outputKlasse;


    this.vraag;
    var antwoorden = new Array();

    /** 
     * Shows the startDiv
     */
    this.init = function () {
        this.navigate(true, false, false);
    };

    /**
     * Decides to show/hide the start-/input-/showDiv based on a boolean
     * @param {boolean} start
     * @param {boolean} input
     * @param {boolean} show
     */
    this.navigate = function (start, input, show) {
        if (start) { //hide/show start
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


    /**
     * Gets the value of the input with the "inputVraag" ID
     * Gets the values of the inputs which contain the class "inputAntwoorden"
     * Shows the question and answers in the element with the "output" ID
     */
    this.start = function () {
        //get input
        this.vraag = $(this.inputVraag).val(); // get question
        $(this.inputAntwoorden).each(function () { //get answers
            console.log($(this).val());
            antwoorden.push($(this).val());
        });

        console.log(this.vraag);
        console.log(antwoorden);


        //fill up output
        $("<h4></h4>").html(this.vraag).appendTo(this.output);

        var lijstAntwoorden = $("<ul></ul>");

        if (antwoorden.length > 4) lijstAntwoorden.addClass("split-list");

        var outputKlasse = this.outputKlasse;
        antwoorden.forEach(function (antwoord) {
            var html = "<button class='check btn red'><i class='material-icons'>clear</i></button> <span class='blurry "
            + outputKlasse
            + "'>" 
            + antwoord + "</span>";
            $("<li class='answer-check'></li>").html(html).appendTo(lijstAntwoorden);
        });

        lijstAntwoorden.appendTo(this.output);
        console.log(this.outputKlasse);
    };


    /**
     * Resets all necessary variables
     * Resets all inputs
     */
    this.reset = function () {
        //reset variables
        this.vraag = "";
        antwoorden = new Array();

        //reset input vals
        $(this.output).empty();
        $(this.inputVraag).val("");
        $(this.inputAntwoorden).val("");

    };

    /**
     * Checks all inputs whit the "inputVraag" ID or the "inputAntwoorden" class
     * Retuns true if all inputs have a value
     * @return {boolean} filledIn
     */
    this.controleInput = function () {
        var filledIn = true;

        if ($(this.inputVraag).val() == "") filledIn = false; //checks emptyness of question input
        $(inputAntwoorden).each(function () { //checks if all inputAntwoorden are empty
            if ($(this).val() == "") filledIn = false;
        });
        
        return filledIn;
    };

    /**
     * Gets a random question and its answers from the database and filles in the inputs automatically
     * @param {string} soort - the kind of question you want to be returned from the database (OD/ingelijst)
     */
    this.selectRandomInput = function (soort) {

        var counter = 0;
        var question;
        var answers = [];

        var vraagInput = this.inputVraag;
        var antwoordInput = this.inputAntwoorden;
        
        function getData() {
            return $.ajax({
                url: "http://robbertvanhove.ddns.net/dsmtw/randomVraag.php",
                dataType: 'json',
                data: {soort: soort}
            });
        }

        getData().done(function (data) {
            //vraag opvullen
            question = data.vraag;
            $(vraagInput).val(question);

            //antwoorden opvullen
            answers = data.antwoorden;
            console.log(answers);
            $(antwoordInput).each(function () { //antwoorden ophalen
                $(this).val(answers[counter].antwoord);
                counter++;
            });
        });

    };

    this.showToggle = function(){
        var outputKlasse = this.outputKlasse;
        $("." + outputKlasse).each(function(){
            if($(this).hasClass("blurry")){
                $(this).removeClass("blurry");
            }else {
                if(!$(this).hasClass("checked")){
                    $(this).addClass("blurry");
                }
            }
        });
        
    };
}