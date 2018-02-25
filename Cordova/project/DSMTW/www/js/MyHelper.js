var MyHelper = function () {
    var hideShow = function (hide, show) {
        $(hide).hide();
        $(show).show();
    };
    var changeTitle = function (tab) {
        var title;

        switch (tab) {
            case "tabTimer":
                title = "Timer"
                break;
            case "tabOpenDeur":
                title = "Open Deur";
                break;
            case "tabPuzzel":
                title = "Puzzel";
                break;
            case "tabIngelijst":
                title = "Ingelijst";
                break;
            case "tabInfo":
                title = "Info";
                break;
            case "tabInstellingen":
                title = "Instellingen"
            
            default:
                break;
        }

        console.log(title);

        $("#titel").html(title);
    };

    return {
        hideShow: hideShow,
        changeTitle: changeTitle    
    }
}();