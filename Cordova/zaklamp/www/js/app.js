$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    $('#switch img').click(function(){
        // Wijzig de afbeelding         off.png <--> on.png
        // Zet zaklamp                      uit <--> aan
    });
});

function onDeviceReady() {
    // Voeg twee event-listeners toe: app gaat naar de achtergrond en komt terug naar de voorgrond.
    // App komt terug naar de voorgrond: test de toestand van de afbeeldingen en beslis of de zaklamp aan of uit is.
}