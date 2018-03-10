
function Timer(timerElement /*#timer*/, timeElement /*#time*/, startTime, backgroundStopped, backgroundStarted, foregroundStopped, foregroundStarted, timeToCalculateElement){
    this.timerElement = timerElement;
    this.timeElement = timeElement;
    this.startTime = startTime;
    this.timeToCalculateElement = timeToCalculateElement;
    

    //stylers
    this.backgroundStarted = backgroundStarted;
    this.foregroundStarted = foregroundStarted;
    this.backgroundStopped = backgroundStopped;
    this.foregroundStopped = foregroundStopped;
    
    //locals
    this.interval;
    var started = false;
    var time;
    

    //actions
    this.init = function(){
        time = this.startTime;
    };

    this.Start = function(){
        started = true;
        time = parseInt($(timeElement).html());

        console.log("timer gestart");
        console.log(time);

        $(this.timerElement).css("background-color", this.backgroundStarted); // rgba(200, 19, 0, 0.95)
        $(this.timeElement).css("color", this.foregroundStarted); //rgb(250, 182, 101) 
        this.interval = setInterval(countdown(), 1000); //run the loop
    };

    this.Stop = function() {
        clearInterval(this.interval); //stops interval
        started = false; //remember timer has stopped

        $(this.timerElement).css("background-color", this.backgroundStopped); //make timer red again when stopped #AA1300
        $(this.timeElement).css("color", this.foregroundStopped); //rgba(255, 255, 255, 0.9)
    };

    this.Toggle = function () {
        if (!started) {
            this.Start();
        } else {
            this.Stop();
        }
    };

    this.Add = function () {
        if ($.isNumeric($(this.timeToCalculateElement).val())) { //numeric check
            var added = parseInt($(this.timeToCalculateElement).val());
            console.log(added);
            time += added;
            Update();
        }
    };

    this.Remove = function () {
        if ($.isNumeric($(this.timeToCalculateElement).val())) { //numeric check
            var added = parseInt($(this.timeToCalculateElement).val());
            console.log(added);
            this.time -= added;
            Update();
            
        }

        console.log(this.timeToCalculateElement);
        console.log(this.time);
    };

    this.Reset = function(){
        time = this.time;
    };






    var countdown = function() {
        console.log("min 1 sec");
        console.log(time);

        time -= 1; //new time
        Update();
    };
    
    Update = function(){
        if (time < 0) {
            time = 0;
            
            stopTimer();
            if(localStorage.getItem("vibrateOn0") == "true"){
                Vibrator.vibrate(1000);
                console.log("vibreert nu voor 1s");
            }
        }

        $(this.timeElement).html(time.toString()); //show time
    };

}