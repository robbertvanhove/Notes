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
        if (started == false) {
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
    };

    var startTimer = function () {
        started = true; //remember timer has started
        time = parseInt($("#time").html());; //get time from span in timer  div

        console.log("timer gestart");
        console.log(time);

        $("#timer").css("background-color", "rgba(200, 19, 0, 0.95)"); //make timer green when running
        interval = setInterval(_countdown, 1000); //run the loop
    };

    var reset = function(){
        setTime(60);
        stopTimer();
    };

    //private
    var _countdown = function () {
        if (time == 1) {
            _stopTimer(); //stoptimer when at 0 secods
        }
        console.log("min 1 sec");
        console.log(time);

        time -= 1; //new time
        _updateTimer();
    };



    var _updateTimer = function () {
        if (time < 0) {
            time = 0;
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