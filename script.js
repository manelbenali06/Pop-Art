// Form Submission Handler
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire
    
        // Exemple d'alerte pour simuler la commande
        alert("Commande envoyée !");
    
        // Réinitialise le formulaire après l'envoi
        this.reset();
    });