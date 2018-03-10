var Timer = function () {
    var time = 0;
    var startTime;
    var started;
    var interval;
    var timerElement;
    var timeElement;
    
    //public
    
    /**
     * initiates the timer
     * @param  {element} timerDiv - element with the timer layout
     * @param  {element} timeDiv - element where the time is shown
     * @param  {int} startTime - the time to start the timer on
     */
    var init = function (timerDiv, timeDiv, startTime) {
        time = startTime; //default time
        startTime = startTime
        started = false;
        timerElement = timerDiv;
        timeElement = timeDiv;
    };
    /**
     * set timer to specific number of seconds
     * @param  {int} tijd - number of seconds to set the timer to
     */
    var setTime = function (tijd) {
        if ($.isNumeric(tijd)) { //numeric check
            time = parseInt(tijd);
            _updateTimer();
        }
    };
    
    /** 
     * Starts timer if stopped and vice versa
    */
    var toggle = function () {
        if (!started) {
            startTimer();
        } else {
            stopTimer();
        }
    };

    /**
     * adds seconds to the time
     * @param {} addedTime - number of seconds to add to the time
     */
    var add = function (addedTime) {
        if ($.isNumeric(addedTime)) { //numeric check
            var added = parseInt(addedTime);
            console.log(added);
            time += added;
            _updateTimer();
        }
    };

    /**
     * substracts seconds from time
     * @param {int} timeToRemove - number of seconds to substract from the time 
     */
    var remove = function (timeToRemove) {
        if ($.isNumeric(timeToRemove)) { //numeric check
            var added = parseInt(timeToRemove);
            console.log(added);
            time -= added;
            _updateTimer();
        }
    };

    /**
     * Stops the timer
     */
    var stopTimer = function () {
        clearInterval(interval); //stops interval
        started = false; //remember timer has stopped

        timerElement.css("background-color", "#AA1300"); //make timer red again when stopped
        timeElement.css("color", "rgba(255, 255, 255, 0.9)");
    };

    /**
     * Starts the timer
     */
    var startTimer = function () {
        started = true; //remember timer has started
         

        console.log("timer gestart");
        console.log(time);

        timerElement.css("background-color", "rgba(200, 19, 0, 0.95)"); //make timer green when running
        timeElement.css("color", "rgb(250, 182, 101) ");
        
        interval = setInterval(_countdown, 1000); //run the loop
    };

    /**
     * Sets the time to the startTime
     */
    var reset = function(){
        setTime(60);
        stopTimer();
    };

    //private
    /** 
     * makes the timer countdown every one second
    */
    var _countdown = function () {
        console.log("min 1 sec");
        console.log(time);

        time -= 1; //new time
        _updateTimer();
    };


    /**
     * shows the latest time in the timeElement
     */
    var _updateTimer = function () {
        if (time < 0) {
            time = 0;
            console.log(time);
            stopTimer();
            if(MyHelper.getLS("vibrateOn0")){
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