import emailjs from "@emailjs/browser";

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("OtwdduZey_vWkjQyE");

    document.getElementById("emailForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const emailParams = {
            from_email: email,
            message: message
        };

        emailjs.send("service_i62wijc", "DEIN_TEMPLATE_ID", emailParams)
            .then(response => {
                alert("E-Mail erfolgreich gesendet!");
                console.log("Success!", response.status, response.text);
            })
            .catch(error => {
                alert("Fehler beim Senden der E-Mail.");
                console.error(error);
            });
    });
});
