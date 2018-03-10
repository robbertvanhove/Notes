var Sound = function () {
    var init = function() {

    };
    var playSound = function (soundfile) {
        var sound = new Media(soundfile);
        sound.play();

        console.log(soundfile + "playing");
    };

    return {
        init:init,
        playSound: playSound,
    };
}();