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

    //Timer
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



    //Open deur
    //klik op zelf vraag ingeven
    $("#openDeurEigenVraag").click(function () {

        $("#openDeurStart").hide();
        $("#OpenDeurVraagInput").show();

    });

    //klik op volgende bij input scherm
    $("#openDeurVolgende").click(function () {
        OpenDeur.start();

    });

    //klik op vorige bij input
    $("#openDeurVorige").click(function () {
        OpenDeur.reset();

    });

    $("#openDeurReset").click(function () {
        OpenDeur.reset();

    });





    //Puzzel
    // klik op eigen puzzel
    $("#puzzelEigenVraag").click(function () {
        $("#puzzelStart").hide();
        $("#puzzelInput").show();
    });

    //klik op volgende bij input
    $("#puzzelVolgende").click(function(){
        Puzzel.start();
        $("#puzzelInput").hide();
        $("#puzzelToon").show();
    });

    //klik op knop naast antwoord
    $(document).on("click", "a.antwoordBtn", function() {
        
    });

    $("#puzzelVorige").click(function(){
        Puzzel.reset();
    });

    $("#puzzelReset").click(function(){
        Puzzel.reset();
    });


    //Open Deur + Ingelijst

    //klik op checkbutton naast antwoord
    $(document).on('click', "button.check", function () {
        console.log("checked");
        $(this).removeClass("red").addClass("green"); //verander achtergrond naar groen
        $(this).find("i").html("check"); // verander kruis in checkmark
    });

    //settings
    //verander zeg hallo
    $("#settingHallo").click(function () {
        if ($(this).is(":checked")) {
            localStorage.setItem("hallo", true);
        }
        else{
            localStorage.setItem("hallo", false);
        }
    });

});

function onDeviceReady() {
    console.log('Device is ready');
    Timer.init();
    OpenDeur.init();
    Puzzel.init();

    //toastr options
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.options.closeEasing = 'swing';

    //settings uitvoeren
    if (localStorage.getItem("hallo") == "true") {

        alert("hallo");
        $("#settingHallo").prop("checked", true);
    }

};

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
};