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
        var rotatie = 'rotate(' + degr + 'deg)'; //css waarde voor draaien
        console.log(rotatie);

        $('#compass').html(txt); 
        $("img#compassImg").css("transform", rotatie); //compas laten roteren
    };
    var start = function () {
        myCompass = navigator.compass.watchHeading(_compassSuccess, _compassError, options);
        
    };
    var stop = function () {
        navigator.compass.clearWatch(myCompass);
        _update("Gestopt", 0);
    };
    return {
        init: init,
        start: start,
        stop: stop
    };
}();