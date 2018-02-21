var Zaklamp = function () {
    var on = function () {
        // Zet zaklamp aan
        window.plugins.flashlight.switchOn();

    }

    var off = function () {
        // Zet zalkamp uit
        window.plugins.flashlight.switchOff();
    }

    return {
        on: on,
        off: off
    }
}()