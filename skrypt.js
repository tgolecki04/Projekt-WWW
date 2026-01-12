document.getElementById('copy-adress').addEventListener('click', function() {
    const adress = "ul. Dożynkowa, 21-105 Lublin";

    navigator.clipboard.writeText(adress)
        .then(() => {
            alert("Skopiowano adres do schowka!");
        })
        .catch(err => {
            console.error("Błąd kopiowania:", err);
        });
});

document.getElementById('copy-number').addEventListener('click', function() {
    const number = "+48 605 556 234";

    navigator.clipboard.writeText(number)
        .then(() => {
            alert("Skopiowano numer telefonu do schowka!");
        })
        .catch(err => {
            console.error("Błąd kopiowania:", err);
        });
});

document.getElementById('copy-email').addEventListener('click', function() {
    const email = "twojeauto-kontakt@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Skopiowano email do schowka!");
        })
        .catch(err => {
            console.error("Błąd kopiowania:", err);
        });
});

