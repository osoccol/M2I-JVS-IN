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
let clients = [client, {id: 102, nom: "Durand", email: "durand@example.com"}];
console.log(clients);

function ajouterClient(nouveauClient) {
    clients.push(nouveauClient);
    console.log("Client ajouté avec succès !", nouveauClient);
}

ajouterClient({id: 103, nom: "Martin", email: "martin@example.com"});
console.log(clients);

const afficherNoms = (clients) => {
    for(let i = 0; i< clients.length; i++) {
        console.log(clients[i].nom);
    }
    // console.log(clients.map(cli => cli.nom));
};
afficherNoms(clients);

// const crm = {
//     nom: "Gestion clients",
//     afficherNom: function() {
//         console.log(`CRM : ${this.nom}`);
//     },
//     afficherNomFleche: () => {
//         console.log(`CRM : ${this.nom}`);
//     },
// }

// crm.afficherNom();
// crm.afficherNomFleche();

// const rechercherClient = (idRecherche) => {
//     return clients.find(cli => cli.id == idRecherche) || "Client introuvable";
// }
// console.log(rechercherClient(102));
// console.log(rechercherClient(999));

