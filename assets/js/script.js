document.addEventListener("DOMContentLoaded", function () {
  // ========== EFFET SONORE SUR LE LIEN ==========
  const lien = document.querySelector(".son-lien");
  const audio = document.getElementById("son-questionnaire");

  if (lien && audio) {
    lien.addEventListener("mouseenter", () => {
      audio.currentTime = 0; // Remet le son au début
      audio.play(); // Joue le son
    });
  }

  // ========== ANIMATION AU SCROLL ==========
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Ajoute la classe visible
      }
    });
  }, { threshold: 0.1 }); // Déclenche quand 10% de l'élément est visible

  // Observe ces éléments
  document.querySelectorAll(".engagement-block, .programme-card, .agenda-item, .contact-info, .contact-form").forEach(el => {
    observer.observe(el);
  });

  // ========== ANIMATION DES ICÔNES SOCIALES ==========
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)'; // Agrandit et incline
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)'; // Remet à la normale
    });
  });

  // ========== MENU BURGER ==========
  window.toggleMenu = function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  };
});
