// Défilement fluide pour les liens du menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Empêche le comportement par défaut
      const targetId = this.getAttribute('href'); // Récupère l'id de la cible
      const targetSection = document.querySelector(targetId); // Sélectionne la section correspondante
      targetSection.scrollIntoView({
        behavior: 'smooth', // Défilement fluide
        block: 'start' // Aligne la section en haut
      });
    });
  });
  