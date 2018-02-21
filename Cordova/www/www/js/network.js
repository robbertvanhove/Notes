var Network = function () {
    var init = function(){
        _getState();
    };
    var _getState = function(){
        $('#networkState').text('Network state');
    };
    return {
        init: init
    };
}();