var Device = function () {
    var init = function () {
        var data = 'Device info';
        $('#model').html(data);
    };
    return {
        init: init
    };
}();