var Device = function () {
    var init = function () {
        console.log(device);
        var data = '' +
            '<b>Fabrikant: </b> ' + device.manufacturer + '<br>' +
            '<b>Model: </b> ' + device.model + '<br>' +
            '<b>Serienummer: </b> ' + device.serial + '<br>' +
            '<b>UUID: </b>' + device.uuid + '<br><br>' +
            '<b>Cordova: </b> ' + device.cordova + '<br>' +
            '<b>Platform: </b> ' + device.platform + '<br>' +
            '<b>Android: </b> ' + device.version + '<br>';
        $('#model').html(data);
    };
    return {
        init: init
    };
}();