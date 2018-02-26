var Sound = function () {
    var init = function() {

    };
    var playSound = function (soundfile) {
        var sound = new Media(soundfile);
        sound.play();
    };

    return {
        init:init,
        playSound: playSound,
    };
}();