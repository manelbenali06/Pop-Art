// Form Submission Handler
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire
    
        // Exemple d'alerte pour simuler la commande
        alert("Commande envoyée !");
    
        // Réinitialise le formulaire après l'envoi
        this.reset();
    });


// Pagination
function showPage(page) {
    const products = document.querySelectorAll('[data-page]');
    products.forEach(product => {
        product.style.display = product.getAttribute('data-page') == page ? 'block' : 'none';
    });
}

showPage(1); // Affiche la première page par défaut
