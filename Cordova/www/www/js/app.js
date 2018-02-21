$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    console.log('Device is ready');
    Device.init();
    Network.init();
    Compass.init();
};
