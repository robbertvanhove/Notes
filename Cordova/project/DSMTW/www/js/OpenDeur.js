var OpenDeur = function() {
    var question;
    var answers = new Array();
    //public
    var init = function() {
        alert("gelukt");
    };

    var _getQuestion = function(){
        question = $("#openDeurVraag").val(); //vraag ophalen
        console.log(question);
        $("#openDeurVraagInput .answer").each(function() {
            console.log(this.val());
        });

    };

    
    //private
    return {
        init:init,
        getQuestion: _getQuestion  
        
    };
}();