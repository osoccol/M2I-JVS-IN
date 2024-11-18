const client = {
    id: 101,
    nom: "Dupont",
    email: "dupont@example.com"
};

console.log(`Client : ${client.nom}, Email : ${client.email}`);

function welcome() {
    alert('Bienvenue dans votre CRM+ !');
}

// function changerMessage() {
//     let message = document.getElementById("message");
//     message.textContent = `Bonjour client.nom`;
// }