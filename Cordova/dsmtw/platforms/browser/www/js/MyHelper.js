var MyHelper = function () {

    /**
     * @param  {array} navigationArray
     */
    var Navigation = function (navigationArray) {
        navigationArray.forEach(function (e) {
            if (e.show) {
                $(e.element).show()
            } else {
                $(e.element).hide()
            }
        }, this);
    };

    /**
     * Randomizes an array
     * @param  {array} o - array to randomize
     * @returns {array} - the shuffled array
     */
    var Shuffle = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    /**
     * checks an array for duplicate values
     * @param  {array} array - array to chek
     * @returns {bool} - true if duplicate values in array
     */
    var HasDuplicates = function (array) {
        var valuesSoFar = Object.create(null);
        for (var i = 0; i < array.length; ++i) {
            var value = array[i];
            if (value in valuesSoFar) {
                return true;
            }
            valuesSoFar[value] = true;
        }
        return false;
    };

    /**
     * Creates a style tag 
     * @param  {string} id
     * @param  {array} styleArray
     */
    var MakeStyleElement = function (id, styleArray) {
        //create style tag
        var style = "<style id='" + id + "'>";

        //add styles to styletag
        styleArray.forEach(function (e) {
            var styleElement = e.selector +
                "{" + e.applies + "}";
            style += styleElement;
        }, this);

        //close style tag
        style += "</style>";

        return $(style);
    };

    /**
     * returns conversion of localstorageItem to Json
     * @param  {string} item
     */
    var getLS = function (item) {
        return JSON.parse(localStorage.getItem(item));
    };
    
    /**
     * blurs/unblurs a specific class
     * @param  {string} outputKlasse - classname of elements that need to be shown/hided
     */
    var showToggle = function (outputKlasse) {
        console.log(outputKlasse);
        $(outputKlasse).each(function () {
            if ($(this).hasClass("blurry")) {
                $(this).removeClass("blurry");
                
            } else {
                if (!$(this).hasClass("checked")) {
                    $(this).addClass("blurry");
                }
            }
        });
    };

    return {
        Navigation: Navigation,
        Shuffle: Shuffle,
        HasDuplicates: HasDuplicates,
        MakeStyleElement: MakeStyleElement,
        getLS: getLS,
        showToggle: showToggle

    }
}();