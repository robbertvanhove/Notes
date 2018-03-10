var Settings = function () {
    //local vars
    const styleId = "hoogcontraststijl";
    var style;

    /** 
     * Gets all checkboxes with the .setting class
     * Makes new setting in localstorage if not exists
     * executes all necessary actions to make settings work
     */
    var init = function (settingClass) {

        //get settings
        $(settingClass).each(function () {
            var setting = $(this).data("setting");

            //check exists
            if (localStorage.getItem(setting)) {
                if (MyHelper.getLS(setting)) {
                    $(this).prop("checked", true);
                }
            } else {
                localStorage.setItem(setting, false); //put setting in localstorage
            }
        });

        //execute settings at launch
        //hoogContrast
        var styles = [{
                selector: "*",
                applies: "color: white !important; background-color: black !important;"
            },
            {
                selector: "button:hover",
                applies: "color: black !important;background-color: white !important;border: white 1px solid !important;"
            },
            {
                selector: ".blurry",
                applies: "color: black !important;"
            },
            {
                selector: "#timer",
                applies: "border-color: white !important;"
            },
            {
                selector: ".red, .green",
                applies: "background-color: black !important;"
            },
            {
                selector: "i",
                applies: "background-color: black !important;color: white !important;"
            }
        ];
        style = MyHelper.MakeStyleElement(styleId, styles);
        hoogContrast();
    };

    /**
     * Adds or removes the "hoogContrast" - style based on setting 
     */
    var hoogContrast = function () {
        //decide to apply style or not
        if (localStorage.getItem("hoogContrast") == "true") {
            style.appendTo($("head"));
        } else {
            $("#" + styleId).remove();
        }
    };
    /**
     * Changes a setting when pushed on a checkbox
     * Logs error when not a checkbox
     * @param  {element} settingKnop
     */
    var changeSettingCheckBox = function(settingKnop) {
        var setting = $(settingKnop).data("setting");
        var checked = false;

        if(!$(settingKnop).is("input:checkbox")){
            console.error("This is not a checkbox!");
        }else {
            if ($(settingKnop).is(":checked")) {
                console.log("gechecked!");
                checked = true;
            }
            localStorage.setItem(setting, checked);
        }
    };

    return {
        init: init,
        hoogContrast: hoogContrast,
        changeSettingCheckBox: changeSettingCheckBox
    };
}();