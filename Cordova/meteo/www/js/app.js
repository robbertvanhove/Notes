$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    // jQuery AJAX error
    $(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
        console.log(thrownError);
        alert('Triggered ajaxError handler');
    });

    $('#renew').click(function(){
        Weather.init();
    });
});

function onDeviceReady() {
    console.log('Device is ready');
    Weather.init();
}
