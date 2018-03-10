//vars
var ingelijst = new Vraag("#ingelijstStart", "#ingelijstInput", "#ingelijstToon", "#ingelijstVraag", ".inputI", "#ingelijstOutput", "outputIngelijst");
var opendeur = new Vraag("#openDeurStart", "#openDeurInput", "#openDeurToon", "#openDeurVraag", ".inputOD", "#openDeurOutput", "outputOD");


$(function () {
    
    //general!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Click link in navigation
     */
    $('.side-nav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.button-collapse').sideNav('hide');
        $("#titel").html($(this).data("title"));

        Timer.stopTimer(); //stopt timer bij het verlaten van een pagina
    });

    //actions!!!!!!!!!!!!!!!!!!!!!!!!
    document.addEventListener("backbutton", onBackButton, false);
    document.addEventListener("deviceready", onDeviceReady, false); //ondeviceready

    //Timer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Click on the timer
     */
    $("#timer").click(function () {
        Timer.toggle();
    });

    /**
     * Click on plus button
     */
    $("#timerPlus").click(function () {
        var timeToCalculate = parseInt($("#inputTijd").val());
        Timer.add(timeToCalculate);
    });

    /**
     * Click on minus button
     */
    $("#timerMin").click(function () {
        var timeToCalculate = parseInt($("#inputTijd").val());
        Timer.remove(timeToCalculate);
    });

    /**
     * Click on reset  button
     */
    $("#timerReset").click(function () {
        if (confirm('Bent u zeker?')) {
            Timer.reset();
            Timer.stopTimer();
        }
    });


    //Open deur!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Click on "Eigen vraag"
     */
    $("#openDeurEigenVraag").click(function () {
        opendeur.navigate(false, true, false);
    });

    /**
     * Click on "Willekeurige vraag"
     */
    $("#openDeurWillekeurigeVraag").click(function () {
        opendeur.navigate(false, true, false);
        opendeur.selectRandomInput("OD");
    });

    /**
     * Click on "Start" in inputDiv
     */
    $("#openDeurVolgende").click(function () {
        if (opendeur.controleInput()) {
            opendeur.navigate(false, false, true);
            opendeur.start();
        } else {
            alert("Gelieve alles in te vullen!");
        }
    });

    /**
     * Click on reset/previous
     */
    $(document).on("click", "#openDeurReset, #openDeurVorige", function () {
        opendeur.navigate(true, false, false);
        opendeur.reset();
    });

    /**
     * Click on eye-button in output
     */
    $("#openDeurToonAntwoorden").click(function () {
        opendeur.showToggle();
    });


    //Puzzel!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Click on "Eigen puzzel"
     */
    $("#puzzelEigenVraag").click(function () {
        Puzzel.Navigate(false, true, false)
    });

    /**
     * Click on "Willekeurige puzzel"
     */
    $("#puzzelWillekeurigeVraag").click(function () {
        Puzzel.selectRandomPuzzel();
        Puzzel.Navigate(false, true, false);
    });

    /**
     * Click on "Start"
     */
    $("#puzzelVolgende").click(function () {
        if(Puzzel.ValidateInput()){
            Puzzel.start();
            Puzzel.Navigate(false, false, true);
        } else {
            alert("Gelieve alles in te vullen! Zorg er ook voor dat u geen dubbele waarden ingeeft!");
        }
    });

    /**
     * Click on button next to an answer
     */
    $(document).on("click", "button.antwoordBtn", function () {
        Puzzel.checkAnswer($(this));
    });

    /**
     * Click on "Vorige" or resetbutton
     */
    $(document).on("click", "#puzzelVorige, #puzzelReset", function () {
        Puzzel.reset();
        Puzzel.Navigate(true, false, false);
    });

    /**
     * Click on button with eye in output
     */
    $("#puzzelToonAntwoorden").click(function () {
        Puzzel.showToggle();
    });

    /**
     * When typing in "sleutelwoord" -> collapsible-header's text changes
     */
    $(document).on("change paste keyup", ".sleutelwoord", function () {
        var target = "#" + $(this).data("target");
        var inhoud = $(this).val();

        if (!inhoud) { //check empty
            inhoud = $(this).attr("placeholder");
        }

        $(target).html(inhoud); //colapse-title = input
    });


    //Ingelijst!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Click on "Eigen vraag"
     */
    $("#ingelijstEigenVraag").click(function () {
        ingelijst.navigate(false, true, false);
    });

    /**
     * click on Volgende
     * First checks for any emty inputs
     */
    $("#ingelijstVolgende").click(function () {
        if (ingelijst.controleInput()) {
            ingelijst.navigate(false, false, true);
            ingelijst.start();
        } else {
            alert("Gelieve alles in te vullen!");
        }
    });

    /**
     * Click on "Willekeurige vraag"
     */
    $("#ingelijstWillekeurigeVraag").click(function () {
        ingelijst.navigate(false, true, false);
        ingelijst.selectRandomInput("ingelijst");
    });

    /**
     *Click on "Vorige" or resetbutton 
     */
    $(document).on("click", "#ingelijstReset, #ingelijstVorige", function () {
        ingelijst.navigate(true, false, false);
        ingelijst.reset();
    });

    /**
     * Click on button with eye in output
     */
    $("#ingelijstToonAntwoorden").click(function () {
        ingelijst.showToggle();
    });


    //Open Deur + Ingelijst + puzzel!!!!!!!!!!!!!!!!!!!!
    /**
     * Click on button next to an answer
     */
    $(document).on("click", "button.check", function () {
        console.log("checked");
        $(this).removeClass("red").addClass("green"); //verander achtergrond naar groen
        $(this).find("i").html("check"); // verander kruis in checkmark

        $(this).siblings().removeClass("blurry").addClass("checked");
    });

    //settings!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Klik on checkbox from a setting
     * changes the setting in true/false -> localstorage
     */
    $(".setting").click(function () {
        Settings.changeSettingCheckBox(this);
    });

    $("#hoogContrast").click(function () {
        Settings.hoogContrast();
    });
});

//actions!!!!!!!!!!!!!!!!!!
/**
 * Action when device is ready
 */
function onDeviceReady() {
    console.log('Device is ready');
    Timer.init($("#timer"), $("#time"), 60)
    opendeur.init();
    Puzzel.init("#puzzelStart", "#puzzelInput", "#puzzelToon");
    ingelijst.init();
    Settings.init(".setting");

    //html settings!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(".sleutelwoord, answerP").attr("maxlength", "40"); //sets maxlength in puzzel inputs
    $(".button-collapse").sideNav(); //set sidenav
    $(".preloader-wrapper").hide();
}

/**
 * Action when press on backbutton
 * Shows the timer page
 */
function onBackButton() {
    $('.spa').hide();
    $("#tabTimer").show();
    $('.button-collapse').sideNav('hide');
    $("#titel").html("Timer");
}