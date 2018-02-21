$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    $('#switch img').click(function(){
        // Wijzig de afbeelding         off.png <--> on.png
        var foto = $('#switch img').attr('src'); //src van img opvragen
        var bron;
        if (foto == 'assets/off.png'){
             bron = 'assets/on.png'; // foto wijzigen
             console.log("heej");

             Zaklamp.on();

        } else {
            bron ='assets/off.png'
            Zaklamp.off();
        }
        $("#switch img").attr('src', bron);
        console.log(foto);
        // Zet zaklamp                      uit <--> aan
    });
});

function onDeviceReady() {
    // Voeg twee event-listeners toe: app gaat naar de achtergrond en komt terug naar de voorgrond.
    // App komt terug naar de voorgrond: test de toestand van de afbeeldingen en beslis of de zaklamp aan of uit is.
    document.addEventListener("pause", Zaklamp.off(), false);
    document.addEventListener("resume", Zaklamp.on(), false);


}