let clients = [
    { nom: "Alice", email: "alice@example.com", age: 25 },
    { nom: "Bob", email: "bob@example.com", age: 32 }
];

// Fonction pour ajouter un client au tableau
function ajouterClient() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    // Validation des données
    if (!nom.trim()) {
        alert("Le champ 'Nom' est obligatoire.");
        return;
    }
    if (!email.includes("@")) {
        alert("Veuillez entrer un email valide.");
        return;
    }
    if (isNaN(age)) {
        alert("L'âge est obligatoire");
        return;
    }

    clients.push({ nom: nom, email: email, age: age });

    // Ajouter une ligne dans le tableau
    const tableBody = document.getElementById("clientTable").querySelector("tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nom}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td><button onclick="supprimerClient(this)">Supprimer</button><button onclick="modifierClient(this)">Modifier</button></td>
    `;

    tableBody.appendChild(row);

    // Réinitialiser le formulaire
    document.getElementById("clientForm").reset();
}

// Fonction pour supprimer un client
function supprimerClient(button) {
    const row = button.parentElement.parentElement; // Récupère la ligne parent    
    clients = clients.filter(el => el.nom != row.children[0].textContent); // Recherche avancée
    row.remove();
}

// Fonction pour styliser les clients majeurs
function styliserMajeurs() {
    const rows = document.querySelectorAll("#clientTable tbody tr");
    rows.forEach(row => {
        const age = parseInt(row.children[2].textContent);
        if (age >= 18) {
            row.classList.add("highlight");
        } else {
            row.classList.remove("highlight");
        }
    });
}

function peuplerTableau() {
    let noms = localStorage.getItem("nom").split(',');
    let emails = localStorage.getItem("email").split(',');
    let ages = localStorage.getItem("age").split(',');
    
    if (nom && emails && ages) {
        let savedClients = [];
        for (let i = 0; i < noms.length; i++) {
            let cli = {nom: noms[i], email: emails[i], age: ages[i]};
            savedClients.push(cli);
        }
        clients = savedClients;
    }

    // Ajouter une ligne dans le tableau
    const tableBody = document.getElementById("clientTable").querySelector("tbody");
    clients.forEach(el => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${el.nom}</td>
            <td>${el.email}</td>
            <td>${el.age}</td>
            <td><button onclick="supprimerClient(this)">Supprimer</button><button onclick="modifierClient(this)">Modifier</button></td>
        `;

        tableBody.appendChild(row);
    });

}

// Méthode pour trier les clients par nom
function trierParNom() {
    clients.sort((a, b) => a.nom.localeCompare(b.nom));
    console.log("Clients triés par nom :", clients);
    sauvegarderClients();
}

// Méthode pour trier les clients par âge
function trierParAge() {
    clients.sort((a, b) => a.age - b.age);
    console.log("Clients triés par âge :", clients);
    sauvegarderClients();
}

// Méthode pour inverser l'ordre des clients
function inverserOrdre() {
    clients.reverse();
    console.log("Ordre inversé des clients :", clients);
    sauvegarderClients();
}

function sauvegarderClients() {
    localStorage.setItem('nom', clients.map(el => el.nom));
    localStorage.setItem('email', clients.map(el => el.email));
    localStorage.setItem('age', clients.map(el => el.age));
    alert("Clients bien sauvegardés !");
    window.location.reload();
}

setTimeout(() => {
    peuplerTableau();
}, 100)


function rechercherClient() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll("#clientTable tbody tr");
    
    rows.forEach(row => {
        const nom = row.children[0].textContent.toLowerCase();
        const email = row.children[1].textContent.toLowerCase();
        
        if (nom.includes(recherche) || email.includes(recherche)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function modifierClient(button) {
    const row = button.parentElement.parentElement;
    const nom = row.children[0].textContent;
    const email = row.children[1].textContent;
    const age = row.children[2].textContent;

    // Remplir le formulaire avec les données actuelles
    document.getElementById('nom').value = nom;
    document.getElementById('email').value = email;
    document.getElementById('age').value = age;

    supprimerClient(button);

    // Modifier le bouton pour indiquer une mise à jour
    document.querySelector("button[onclick='ajouterClient()']").innerText = "Enregistrer les modifications";
}

