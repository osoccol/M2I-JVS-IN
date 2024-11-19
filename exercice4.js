// Constructeur Client
function Client(nom, email) {
    this.nom = nom;
    this.email = email;
    this.afficherDetails = function () {
        const details = document.getElementById("details");
        details.textContent = `Détails du préstataire : ${this.nom}, ${this.email}`;
    };
}

// Création de la classe Prestataire qui hérite de Client
function Prestataire(nom, email, service, tarif) {
    // Appel du constructeur Client pour initialiser nom et email
    Client.call(this, nom, email);
    this.service = service;
    this.tarif = tarif;
}

// Héritage des méthodes de Client en définissant le prototype
Prestataire.prototype = Object.create(Client.prototype);

// Ajout de méthodes spécifiques à Prestataire
Prestataire.prototype.afficherService = function () {
    const services = document.getElementById("services");
    services.textContent = `Services préstataire : ${this.service}, ${this.tarif}€`;
};

// Correction du prototype pour permettre l'instanciation
Prestataire.prototype.constructor = Prestataire;

// Fonction pour créer un client ou un prestataire via HTML
function creerPrestataire() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const tarif = document.getElementById("tarif").value;

    // Créer un nouveau prestataire
    const prestataire = new Prestataire(nom, email, service, tarif);
    
    // Afficher les détails du client et du prestataire
    prestataire.afficherDetails(); 
    prestataire.afficherService();  // Afficher les informations sur le service
}
