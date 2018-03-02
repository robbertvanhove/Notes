//vars
var ingelijst = new Vraag("#ingelijstStart", "#ingelijstInput", "#ingelijstToon", "#ingelijstVraag", ".inputI", "#ingelijstOutput");
var opendeur = new Vraag("#openDeurStart", "#openDeurInput", "#openDeurToon", "#openDeurVraag", ".inputOD", "#openDeurOutput");

$(function () {




    document.addEventListener("deviceready", onDeviceReady, false);
    $('.button-collapse').sideNav();


    // klik op link in navigatie
    $('.side-nav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.button-collapse').sideNav('hide');

        changeTitle($(this).data('show')); //verandert titel
        Timer.stopTimer(); //stopt timer bij het verlaten van een pagina

    });

    //Timer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //klik op timer
    $("#timer").click(function () {
        Timer.toggle();

    });


    //klik op plus
    $("#timerPlus").click(function () {
        var timeToCalculate = parseInt($("#inputTijd").val());
        Timer.add(timeToCalculate);
    });

    //klik op min
    $("#timerMin").click(function () {
        var timeToCalculate = parseInt($("#inputTijd").val());
        Timer.remove(timeToCalculate);
    });

    //klik op reset
    $("#timerReset").click(function () {
        if (confirm('Bent u zeker?')) {
            Timer.reset();
            Timer.stopTimer();
        }

    });



    //Open deur!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //klik op zelf vraag ingeven
    $("#openDeurEigenVraag").click(function () {

        opendeur.navigate(false, true, false);

    });
    $("#openDeurWillekeurigeVraag").click(function () {

        opendeur.navigate(false, true, false);
        opendeur.selectRandomInput();

    });

    //klik op volgende bij input scherm
    $("#openDeurVolgende").click(function () {
        if (opendeur.controleInput()) {
            opendeur.navigate(false, false, true);
            opendeur.start();
        } else {
            Materialize.toast("Gelieve alles in te vullen!", 4000);
        }

    });

    //klik op vorige bij input
    $(document).on("click", "#openDeurReset, #openDeurVorige", function () {
        opendeur.navigate(true, false, false);
        opendeur.reset();
    });



    //Puzzel!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // klik op eigen puzzel
    $("#puzzelEigenVraag").click(function () {
        $("#puzzelStart").hide();
        $("#puzzelInput").show();
    });

    //klik op volgende bij input
    $("#puzzelVolgende").click(function () {
        Puzzel.start();

    });

    //klik op knop naast antwoord
    $(document).on("click", "a.antwoordBtn", function () {
        Puzzel.checkAnswer($(this));
    });

    //klik op vorige
    $("#puzzelVorige").click(function () {
        Puzzel.reset();
    });

    //klik op volgende
    $("#puzzelReset").click(function () {
        Puzzel.reset();
    });

    $('.view').on('mousedown', function () {
        console.log("heej");
    })

    //klik op knop met oog bij antwoorden -> antwoorden zichtbaar maken
    $("#puzzelToonAntwoorden").click(function () {
        Puzzel.viewAnswers();
    });


    //sleutelwoord typen
    $(document).on("change keyup", ".sleutelwoord" ,function () {
        var target = "#" + $(this).data("target");
        var inhoud = $(this).val();

        if (!inhoud) { //check empty
            inhoud = $(this).attr("placeholder");
        }

        $(target).html(inhoud); //colapse-title = input
    });





    //Ingelijst!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $("#ingelijstEigenVraag").click(function () {
        ingelijst.navigate(false, true, false);
    });

    $("#ingelijstVolgende").click(function () {
        if (ingelijst.controleInput()) {
            ingelijst.navigate(false, false, true);
            ingelijst.start();
        } else {
            Materialize.toast("Gelieve alles in te vullen!", 4000);
        }

    });

    $(document).on("click", "#ingelijstReset, #ingelijstVorige", function () {
        ingelijst.navigate(true, false, false);
        ingelijst.reset();
    });


    //Open Deur + Ingelijst!!!!!!!!!!!!!!!!!!!!

    //klik op checkbutton naast antwoord
    $(document).on("click", "button.check", function () {
        console.log("checked");
        $(this).removeClass("red").addClass("green"); //verander achtergrond naar groen
        $(this).find("i").html("check"); // verander kruis in checkmark
    });

    //settings!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //verander zeg hallo
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




//functions
function onDeviceReady() {
    console.log('Device is ready');
    Timer.init();
    opendeur.init();
    Puzzel.init();
    ingelijst.init();
    initializeSettings();

    //toastr options
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.options.closeEasing = 'swing';

    //html
    $(".sleutelwoord, answerP").attr("maxlength", "40"); //sets maxlength in puzzel inputs

}

function changeTitle(tab) {
    var title;

    switch (tab) {
        case "tabTimer":
            title = "Timer"
            break;
        case "tabOpenDeur":
            title = "Open Deur";
            break;
        case "tabPuzzel":
            title = "Puzzel";
            break;
        case "tabIngelijst":
            title = "Ingelijst";
            break;
        case "tabInfo":
            title = "Info";
            break;
        case "tabInstellingen":
            title = "Instellingen"

        default:
            break;
    }

    console.log(title);

    $("#titel").html(title);
}

function initializeSettings() {
    $(".setting").each(function () {
        var setting = $(this).data("setting");

        //check exists
        if (localStorage.getItem(setting)) {
            if (localStorage.getItem(setting) == "true") {
                $(this).prop("checked", true);
            }

        } else {
            localStorage.setItem(setting, false); //put setting in localstorage
        }
    });
}

function executeStartupSettings() {

}