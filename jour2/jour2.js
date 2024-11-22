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
