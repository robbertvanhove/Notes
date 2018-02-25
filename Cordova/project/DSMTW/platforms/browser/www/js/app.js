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
        if(confirm('Bent u zeker?')){
            Timer.reset();
            Timer.stopTimer();
        }
        
    });

    //Open deur
    //klik op zelf vraag ingeven
    $("#openDeurEigenVraag").click(function(){
        
        $("#openDeurStart").hide();
        $("#OpenDeurVraagInput").show();

    });

    //klik op volgende bij input scherm
    $("#openDeurVolgende").click(function(){
        OpenDeur.start();

    });

    //klik op vorige bij input
    $("#openDeurVorige").click(function(){
        OpenDeur.reset();

    });

    $("#openDeurReset").click(function(){
        OpenDeur.reset();

    });





    //Open Deur + Ingelijst

    //klik op checkbutton naast antwoord
    $(document).on('click', "button.check", function () {      
        console.log("checked");
        $(this).removeClass("red").addClass("green"); //verander achtergrond naar groen
        $(this).find("i").html("check"); // verander kruis in checkmark
    });

});

function onDeviceReady() {
    console.log('Device is ready');
    Timer.init();
    OpenDeur.init();

    //toastr options
    toastr.options.preventDuplicates = true; 
    toastr.options.progressBar = true;
    toastr.options.closeEasing = 'swing';

};

function changeTitle  (tab) {
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




