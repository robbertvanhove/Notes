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
    
    //html settings!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(".sleutelwoord, answerP").attr("maxlength", "40"); //sets maxlength in puzzel inputs
    document.addEventListener("deviceready", onDeviceReady, false); //ondeviceready
    $('.button-collapse').sideNav(); //set sidenav

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
            Materialize.toast("Gelieve alles in te vullen!", 4000);
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
    $("#openDeurToonAntwoorden").click(function(){
        opendeur.showToggle();
    });


    //Puzzel!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /**
     * Click on "Eigen puzzel"
     */
    $("#puzzelEigenVraag").click(function () {
        $("#puzzelStart").hide();
        $("#puzzelInput").show();
    });

    /**
     * Click on "Willekeurige puzzel"
     */
    $("#puzzelWillekeurigeVraag").click(function () {
       
        Puzzel.selectRandomPuzzel();
        $("#puzzelStart").hide();
        $("#puzzelInput").show();
    });

    /**
     * Click on "Start"
     */
    $("#puzzelVolgende").click(function () {
        Puzzel.start();
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
    $(document).on("click", "#puzzelVorige, #puzzelReset", function(){
        Puzzel.reset();
    });

    /**
     * Click on button with eye in output
     */
    $("#puzzelToonAntwoorden").click(function () {
        Puzzel.viewAnswers();
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
            Materialize.toast("Gelieve alles in te vullen!", 000);
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


    //Open Deur + Ingelijst!!!!!!!!!!!!!!!!!!!!

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
        var setting = $(this).data("setting");
        var checked = false;
        console.log(setting);

        if ($(this).is(":checked")) {
            checked = true;
        }
        localStorage.setItem(setting, checked);
    });

    

});

function onDeviceReady() {
    console.log('Device is ready');
    opendeur.init();
    Puzzel.init();
    ingelijst.init();
    Settings.init();

    
}



