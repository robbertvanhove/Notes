var Weather = function () {
    var wundergroundKey = 'MySecretKey';
    var init = function () {
        $('.progress').show();
        $('#weather').empty().hide();
    };

    var _getWeather = function (lat, lng) {

    };

    var _getCity = function (lat, lng) {

    };

    return {
        init: init
    };
}()