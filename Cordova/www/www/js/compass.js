var Compass = function () {
    var myCompass;
    var options = {
        frequency: 2000     //default is 100 (ms) 
    };
    var init = function () {
        start();
    };
    var _compassSuccess = function(heading) {

    };
    var _compassError = function(error) {

    };
    var _update = function(txt, degr) {

    };
    var start = function () {

    };
    var stop = function () {

    };
    return {
        init: init,
        start: start,
        stop: stop
    };
}();