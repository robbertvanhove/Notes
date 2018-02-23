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
        hideODStart(); // beginscherm verbergen
        $("#OpenDeurVraagInput").css("display", "block");

    });

    $("#openDeurVolgende").click(function(){
        OpenDeur.getQuestion();

    });


});

function onDeviceReady() {
    console.log('Device is ready');
    Timer.init();

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

        default:
            break;
    }

    console.log(title);

    $(".brand-logo").html(title);
}
function hideODStart(){
    $("#openDeurStart").css("display", "none");

};