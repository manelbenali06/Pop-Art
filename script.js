/*Gestionnaire d'événement pour la soumission du formulaire de recherche
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    // Exemple d'alerte pour simuler la commande
    alert("Commande envoyée !");
    // Reset du formulaire après l'envoi
    this.reset();
});

Gestionnaire d'événement pour le clic sur le bouton de commande
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.card');
        processOrder(productCard);
    });
});

// Fonction pour traiter la commande d'un produit
function processOrder(product) {
    const availabilityElement = product.querySelector('.availability');
    let remaining = parseInt(availabilityElement.textContent);
    if (remaining > 0) {
        remaining--;
        availabilityElement.textContent = remaining;
    } else {
        alert('Désolé, ce produit est actuellement en rupture de stock.');
    }
}
*/


    // Form Submission Handler
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire
    
        // Exemple d'alerte pour simuler la commande
        alert("Commande envoyée !");
    
        // Réinitialise le formulaire après l'envoi
        this.reset();
    });

// Gestion des quantités
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.card');
        if (productCard) {
            processOrder(productCard);
        } else {
            console.error('Produit non trouvé');
        }
    });
});

function processOrder(product) {
    const availabilityElement = product.querySelector('.availability');
    if (availabilityElement) {
        let remaining = parseInt(availabilityElement.textContent, 10);
        if (remaining > 0) {
            remaining--;
            availabilityElement.textContent = remaining;
            alert('Commande réussie !');
        } else {
            alert('Désolé, ce produit est actuellement en rupture de stock.');
        }
    } else {
        console.error("L'élément 'availability' n'a pas été trouvé.");
    }
}


// Gestion Modale de l'image
function openModal(img) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src; // Mettre à jour l'image de la modale
    $('#imageModal').modal('show'); // Ouvrir la modale
}

// Pagination
function showPage(page) {
    const products = document.querySelectorAll('[data-page]');
    products.forEach(product => {
        product.style.display = product.getAttribute('data-page') == page ? 'block' : 'none';
    });
}

showPage(1); // Affiche la première page par défaut
