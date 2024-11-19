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