let clients = [
    { name: "Alice", email: "alice@example.com", phone: "0647839283" },
    { name: "Bob", email: "bob@example.com", phone: "0623010929" }
];

// Fonction pour ajouter un client au tableau
function ajouterClient() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Validation des données
    if (!name.trim()) {
        alert("Le champ 'name' est obligatoire.");
        return;
    }
    if (!email.includes("@")) {
        alert("Veuillez entrer un email valide.");
        return;
    }
    if (!phone.trim()) {
        alert("Le téléphone est obligatoire");
        return;
    }

    clients.push({ name: name, email: email, phone: phone });

    // Ajouter une ligne dans le tableau
    const tableBody = document.getElementById("clientTable").querySelector("tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td><button onclick="supprimerClient(this)">Supprimer</button><button onclick="modifierClient(this)">Modifier</button></td>
    `;

    tableBody.appendChild(row);

    // Réinitialiser le formulaire
    document.getElementById("clientForm").reset();
}

// Fonction pour supprimer un client
function supprimerClient(button) {
    const row = button.parentElement.parentElement; // Récupère la ligne parent    
    clients = clients.filter(el => el.name != row.children[0].textContent); // Recherche avancée
    row.remove();
}

// Fonction pour styliser les clients majeurs
// function styliserMajeurs() {
//     const rows = document.querySelectorAll("#clientTable tbody tr");
//     rows.forEach(row => {
//         const age = parseInt(row.children[2].textContent);
//         if (age >= 18) {
//             row.classList.add("highlight");
//         } else {
//             row.classList.remove("highlight");
//         }
//     });
// }

function peuplerTableau() {

    fetch('https://jsonplaceholder.typicode.com/users')  // URL de l'API fictive
        .then(response =>  response.json())
        .then(data => {

            console.log(data);
            clients = data;
        
            // Ajouter une ligne dans le tableau
            const tableBody = document.getElementById("clientTable").querySelector("tbody");
            clients.forEach(el => {
                const row = document.createElement("tr");
        
                row.innerHTML = `
                    <td>${el.name}</td>
                    <td>${el.email}</td>
                    <td>${el.phone}</td>
                    <td><button onclick="supprimerClient(this)">Supprimer</button><button onclick="modifierClient(this)">Modifier</button></td>
                `;
        
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erreur :', error));  // Gestion des erreurs

}

// Méthode pour trier les clients par name
function trierParname() {
    clients.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Clients triés par name :", clients);
}

// Méthode pour trier les clients par téléphone
function trierParPhone() {
    clients.sort((a, b) => a.name.localeCompare(b.phone));
    console.log("Clients triés par téléphone :", clients);
}

// Méthode pour inverser l'ordre des clients
function inverserOrdre() {
    clients.reverse();
    console.log("Ordre inversé des clients :", clients);
}

function sauvegarderClients() {
    localStorage.setItem('name', clients.map(el => el.name));
    localStorage.setItem('email', clients.map(el => el.email));
    localStorage.setItem('phone', clients.map(el => el.phone));
    alert("Clients bien sauvegardés !");
}

setTimeout(() => {
    peuplerTableau();
}, 100)


function rechercherClient() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll("#clientTable tbody tr");

    rows.forEach(row => {
        const name = row.children[0].textContent.toLowerCase();
        const email = row.children[1].textContent.toLowerCase();

        if (name.includes(recherche) || email.includes(recherche)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function modifierClient(button) {
    const row = button.parentElement.parentElement;
    const name = row.children[0].textContent;
    const email = row.children[1].textContent;
    const phone = row.children[2].textContent;

    // Remplir le formulaire avec les données actuelles
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;

    supprimerClient(button);

    // Modifier le bouton pour indiquer une mise à jour
    document.querySelector("button[onclick='ajouterClient()']").innerText = "Enregistrer les modifications";
}


setTimeout(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) {
        console.log("Large écran !");
    } else {
        console.log("Petit écran !");
    }

    mq.addEventListener("change", (event) => {
        if (event.matches) {
            console.log("Passé à un large écran !");
        } else {
            console.log("Passé à un petit écran !");
        }
    });

    window.addEventListener("resize", () => {
        const width = window.innerWidth;

        if (width < 768) {
            console.log("Mode mobile activé");
        } else {
            console.log("Mode desktop activé");
        }
    });

}, 100)