document.addEventListener("DOMContentLoaded", function () {
  // Effet sonore sur le lien du questionnaire
  const lien = document.querySelector(".son-lien");
  const audio = document.getElementById("son-questionnaire");

  if (lien && audio) {
    lien.addEventListener("mouseenter", () => {
      audio.currentTime = 0;
      audio.play();
    });
  }

  // Animation au scroll pour les blocs
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".engagement-block, .programme-card, .agenda-item, .contact-info, .contact-form").forEach(el => {
    observer.observe(el);
  });

  // Animation pour les icônes sociales
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  // Menu burger toggle
  window.toggleMenu = function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  };
});

