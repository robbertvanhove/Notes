var Vibrator = new function() {
    /**
     * makes the phone vibrate
     * @param {int} time - duration to vibrate
     */
    var vibrate = function(time) {
        navigator.vibrate(time);
    };

    return  {
        vibrate: vibrate,
    }
}();