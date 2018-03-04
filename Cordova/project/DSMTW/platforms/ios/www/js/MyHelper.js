var MyHelper = function () {
    var initializeSettings = function() {
        $(".setting").each(function () {
            var setting = $(this).data("setting");
    
            //check exists
            if (localStorage.getItem(setting)) {
                if (localStorage.getItem(setting) == "true") {
                    $(this).prop("checked", true);
                }
    
            } else {
                localStorage.setItem(setting, false); //put setting in localstorage
            }
        });
    };

    return {
        initializeSettings: initializeSettings,
         
    }
}();