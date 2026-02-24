function validateForm() {
    let isValid = true;
    let errors = [];

    // Récupération des éléments
    const lname = document.getElementById('lname');
    const fname = document.getElementById('fname');
    const numT = document.getElementById('numT');
    const mail = document.getElementById('mail');
    const date = document.getElementById('date');
    const heure = document.getElementById('heure');

    // Réinitialisation des styles
    [lname, fname, numT, mail, date, heure].forEach(field => field.style.borderColor = "");

    // Validation Nom
    if (lname.value.trim() === "") {
        lname.style.borderColor = "red";
        errors.push("Le nom est vide.");
        isValid = false;
    }

    // Validation Prénom
    if (fname.value.trim() === "") {
        fname.style.borderColor = "red";
        errors.push("Le prénom est vide.");
        isValid = false;
    }

    // Validation Numéro de téléphone (simple vérification chiffres + longueur)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(numT.value.trim())) {
        numT.style.borderColor = "red";
        errors.push("Le numéro de téléphone doit contenir exactement 10 chiffres.");
        isValid = false;
    }

    // Validation Email (format simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail.value.trim())) {
        mail.style.borderColor = "red";
        errors.push("Adresse email invalide.");
        isValid = false;
    }

    // Validation Date (ne pas autoriser une date passée)
    const today = new Date().toISOString().split("T")[0];
    if (date.value === "" || date.value < today) {
        date.style.borderColor = "red";
        errors.push("La date est vide ou déjà passée.");
        isValid = false;
    }

    // Validation Heure
    if (heure.value === "") {
        heure.style.borderColor = "red";
        errors.push("L'heure n'est pas sélectionnée.");
        isValid = false;
    }

    // Affichage des erreurs
    if (!isValid) {
        alert("Erreur(s) dans le formulaire :\n\n" + errors.join("\n"));
    }

    return isValid;
}




document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerText");
  if (burger) {
    burger.addEventListener("click", toggleMenu);
  }
});

function toggleMenu() {
  const menu = document.getElementById("mainNav");
  menu.classList.toggle("active");
}