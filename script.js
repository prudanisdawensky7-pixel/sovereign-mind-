const frBtn = document.getElementById("frBtn");
const enBtn = document.getElementById("enBtn");

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach(function(element) {

        element.textContent = element.getAttribute("data-" + language);

    });

    document.documentElement.lang = language;
}


frBtn.addEventListener("click", function() {
    changeLanguage("fr");
});


enBtn.addEventListener("click", function() {
    changeLanguage("en");
});


changeLanguage("fr");


// ===============================
// FORMULAIRE DE RÉSERVATION
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

   bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.hash = "payment";
});

}const bookingButton = document.getElementById("bookingButton");

if (bookingButton) {
    bookingButton.addEventListener("click", function () {

        const name = document.getElementById("clientName").value;
        const email = document.getElementById("clientEmail").value;
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;
        const language = document.getElementById("sessionLanguage").value;

        if (!name || !email || !date || !time) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        alert(
            "Réservation enregistrée !\n\n" +
            "Nom : " + name + "\n" +
            "Email : " + email + "\n" +
            "Date : " + date + "\n" +
            "Heure : " + time + "\n" +
            "Langue : " + language + "\n\n" +
            "Prix : $3 USD"
        );

    });
}const bookingButton = document.getElementById("bookingButton");

if (bookingButton) {
    bookingButton.addEventListener("click", function () {
        const paymentSection = document.getElementById("payment");

        if (paymentSection) {
            paymentSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    
