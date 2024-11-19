const client = {
    id: 101,
    nom: "Dupont",
    email: "dupont@example.com"
};

console.log(`Client : ${client.nom}, Email : ${client.email}`);

function welcome() {
    alert('Bienvenue dans votre CRM+ !');
}

function changerMessage() {
    let message = document.getElementById("message");
    message.textContent = `Bonjour ${client.nom}`;
}

// Exercice 2
// Déclaration des variables
const pays = "France"; // Fixe
let prenom = "Inconnu"; // Modifiable
var age = 0; // Modifiable

// Fonction pour mettre à jour les informations du client
function updateClientInfo() {
    prenom = "Alice";
    age = 28;
    const infoClient = document.getElementById("infoClient");
    infoClient.textContent = `Nom : ${prenom}, Âge : ${age}, Pays : ${pays}`;
}


// CHAPITRE 3 - PROGRAMMATION FONCTIONNELLE 
let clients = [client, { id: 102, nom: "Durand", email: "durand@example.com" }];
console.log(clients);

function ajouterClient(nouveauClient) {
    clients.push(nouveauClient);
    console.log("Client ajouté avec succès !", nouveauClient);
}

ajouterClient({ id: 103, nom: "Martin", email: "martin@example.com" });
console.log(clients);

const afficherNoms = (clients) => {
    console.log(clients.map(cli => cli.nom));
};
afficherNoms(clients);

const crm = {
    nom: "Gestion clients",
    afficherNom: function () {
        console.log(`CRM : ${this.nom}`);
    },
    afficherNomFleche: () => {
        console.log(`CRM : ${this.nom}`);
    },
}

crm.afficherNom();
crm.afficherNomFleche();

const rechercherClient = (idRecherche) => {
    return clients.find(cli => cli.id == idRecherche) || "Client introuvable";
}
console.log(rechercherClient(102));
console.log(rechercherClient(999));


// Fonction pour rechercher un client par son ID et afficher les détails
function rechercherEtAfficherClient() {
    // Récupérer l'ID saisi dans le champ
    const idRecherche = document.getElementById("clientId").value;
    // Trouver le client correspondant
    const clientTrouve = clients.find(cli => cli.id == idRecherche);
    // Zone d'affichage des détails
    const clientDetails = document.getElementById("clientDetails");

    // Affichage des détails ou message d'erreur
    if (clientTrouve) {
        clientDetails.textContent = `Nom : ${clientTrouve.nom}, Email : ${clientTrouve.email}`;
    } else {
        clientDetails.textContent = "Client introuvable.";
    }
}

function nouveauClient() {
    const nouveauClientId = parseInt(document.getElementById("nouveauClientId").value);
    const nouveauClientNom = document.getElementById("nouveauClientNom").value;
    const nouveauClientEmail = document.getElementById("nouveauClientEmail").value;
    ajouterClient({ id: nouveauClientId, nom: nouveauClientNom, email: nouveauClientEmail });
}

function Client(nom, email) {
    this.nom = nom;
    this.email = email;
}

// Ajout de méthode au prototype
Client.prototype.afficherDetails = function() {
    console.log(`Nom : ${this.nom}, Email : ${this.email}`);
};

const client1 = new Client("Marc", "marc@example.com");
client1.afficherDetails(); // Utilise la méthode du prototype

const clientModele = {
    afficherDetails: function() {
        console.log(`Nom : ${this.nom}, Email : ${this.email}`);
    }
};

// Création d'objets basés sur clientModele
const client2 = Object.create(clientModele);
client2.afficherDetails(); // Hérite de clientModele

console.log("--------------------");

client2.nom = "Alice";
client2.email = "alice@example.com";
client2.afficherDetails();
