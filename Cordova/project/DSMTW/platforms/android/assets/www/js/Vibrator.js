var Vibrator = new function() {
    var init = function() {

    };
    var vibrate = function(time) {
        navigator.vibrate(time);
    };

    return  {
        vibrate: vibrate,
        init: init
    }
}();