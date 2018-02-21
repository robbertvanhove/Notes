var Compass = function () {
    var myCompass;
    var options = {
        frequency: 2000 //default is 100 (ms) 
    };
    var init = function () {
        
    };
    var _compassSuccess = function (heading) {
        console.log(heading);
        var degr = parseInt(heading.magneticHeading);
        var txt = degr + ' &deg;';
        _update(txt, degr);
    };
    var _compassError = function (error) {
        var degr = '0';
        var txt = '<b>Fout: </b>' + error.code;
        _update(txt, degr);

    };
    var _update = function (txt, degr) {
        $('#compass').html(txt);
    };
    var start = function () {
        myCompass = navigator.compass.watchHeading(_compassSuccess, _compassError, options);
    };
    var stop = function () {
        myCompass = navigator.compass.clearWatch();
    };
    return {
        init: init,
        start: start,
        stop: stop
    };
}();