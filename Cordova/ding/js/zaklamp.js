var Zaklamp = function () {
    var on = function () {
        // Zet zaklamp aan
        window.plugins.flashlight.switchOn({
                intensity: 0.3
            } // optional as well
        );

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