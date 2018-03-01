var Timer = function () {
    var time;
    var started;
    var interval;

    //public
    var init = function () {
        time = 60; //default time
        started = false;
    };

    var setTime = function (tijd) {
        if ($.isNumeric(tijd)) { //numeric check
            time = parseInt(tijd);
            _updateTimer();
        }
    };
    var toggle = function () {
        if (!started) {
            startTimer();
        } else {
            stopTimer();
        }
    };

    var add = function (addedTime) {
        if ($.isNumeric(addedTime)) { //numeric check
            var added = parseInt(addedTime);
            console.log(added);
            time += added;
            _updateTimer();
        }
    };

    var remove = function (timeToRemove) {
        if ($.isNumeric(timeToRemove)) { //numeric check
            var added = parseInt(timeToRemove);
            console.log(added);
            time -= added;
            _updateTimer();
            
        }
    };

    var stopTimer = function () {
        clearInterval(interval); //stops interval
        started = false; //remember timer has stopped

        $("#timer").css("background-color", "#AA1300"); //make timer red again when stopped
        $("#time").css("color", "rgba(255, 255, 255, 0.9)");
    };

    var startTimer = function () {
        started = true; //remember timer has started
        time = parseInt($("#time").html());; //get time from span in timer  div

        console.log("timer gestart");
        console.log(time);

        $("#timer").css("background-color", "rgba(200, 19, 0, 0.95)"); //make timer green when running
        $("#time").css("color", "rgb(250, 182, 101) ")
        interval = setInterval(_countdown, 1000); //run the loop
    };

    var reset = function(){
        setTime(60);
        stopTimer();
    };

    //private
    var _countdown = function () {
        console.log("min 1 sec");
        console.log(time);

        time -= 1; //new time
        _updateTimer();
    };



    var _updateTimer = function () {
        if (time < 0) {
            time = 0;
            
            stopTimer();
            if(localStorage.getItem("vibrateOn0") == "true"){
                Vibrator.vibrate(1000);
                console.log("vibreert nu voor 1s");
                
            }
            
        }

        $("#time").html(time.toString()); //show time
    };

    return {
        init: init,
        toggle: toggle,
        add: add,
        setTime: setTime,
        remove: remove,
        stopTimer: stopTimer,
        startTimer: startTimer,
        reset: reset
    }
}();