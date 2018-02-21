$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.button-collapse').sideNav();

    $('.side-nav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.button-collapse').sideNav('hide');
    });

    $("#startCompass").click(function(){
       Compass.start();
        
    });

    $("#stopCompass").click(function(){
        Compass.stop();
    });
});

function onDeviceReady() {
    console.log('Device is ready');
    Device.init();
    Network.init();
    Compass.init();
};