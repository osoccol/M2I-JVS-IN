const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = "Nouveau client ajouté.";
nouveauParagraphe.id = "client";

function ajouterClient() {
    const container = document.getElementById("container");
    container.appendChild(nouveauParagraphe);
}

function supprimerElement(id) {
    const elementASupprimer = document.getElementById(id);
    elementASupprimer.remove();
}

function styliserParagraphes() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.color = "blue";
        p.style.fontWeight = "bold";
        p.style.backgroundColor = "lightyellow";
    })
}

function ajouterEvenement() {
    const bouton = document.getElementById("ajouterEvenement");
    bouton.addEventListener("click", () => {
        alert("Client ajouté avec succès !");
    });
}
setTimeout(() => {
    ajouterEvenement();
}, 100)

function ajouterClientListe() {
    const clientName = document.getElementById("clientName").value;
    if (clientName.trim() === "") {
        alert("Le nom du client ne peut pas être vide.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = clientName;

    // Ajout d'un événement pour supprimer l'élément au clic
    li.addEventListener("click", () => {
        li.remove();
        alert(`${clientName} a été supprimé.`);
    });

    document.getElementById("listeClients").appendChild(li);
    document.getElementById("clientName").value = ""; // Réinitialise le champ
}

function styliserClients() {
    const clients = document.querySelectorAll("#listeClients li");
    clients.forEach(client => {
        client.style.color = "green";
        client.style.fontWeight = "bold";
        client.style.cursor = "pointer"; // Indique que l'élément est cliquable
    });
}


setTimeout(() => {
    const champ = document.getElementById('champ');
    const bouton = document.getElementById('bouton');
    const resultat = document.getElementById('resultat');

    // Détecter la saisie
    champ.addEventListener('input', (event) => {
        resultat.textContent = `Vous avez tapé : ${event.target.value}`;
    });

    // Détecter le clic
    bouton.addEventListener('click', () => {
        alert('Bouton cliqué !');
    });

    const lien = document.getElementById('lien');
    lien.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
        alert("Redirection bloquée !");
    });

    const box = document.getElementById('box');

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'lightblue';
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'lightgray';
    });

    box.addEventListener('click', () => {
        box.style.backgroundColor = 'green';
    });

}, 200)


function validerForm() {
    // Récupérer les données d'un champ spécifique
    // const nom = document.getElementById("nom").value;
    // console.log("Nom :", nom);

    // Récupérer les données de tout le formulaire
    const formulaire = document.querySelector("form");
    const formData = new FormData(formulaire);
    formData.forEach((valeur, champ) => {
        console.log(`${champ}: ${valeur}`);
    });
}

function ajouterChamp() {
    const nouveauChamp = document.createElement("input");
    nouveauChamp.type = "number";
    nouveauChamp.name = "age";
    nouveauChamp.placeholder = "Entrez un nombre";

    const formulaire = document.getElementById("form");
    formulaire.appendChild(nouveauChamp);
}


function validerFormulaire(event) {
    if (event) {
        event.preventDefault(); // Empêche l'envoi par défaut
    }

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;

    if (!nom) {
        alert("Le champ 'Nom' est obligatoire.");
        return;
    }
    if (!email.includes("@")) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    alert("Formulaire validé avec succès !");
    validerForm();
}


setTimeout(() => {
    const champ = document.getElementById("email");
    champ.addEventListener("focus", () => console.log("Focus sur le champ email"));
    champ.addEventListener("blur", () => console.log("Champ email perdu de vue"));

}, 200);