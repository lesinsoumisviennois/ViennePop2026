// Vérification du chargement de l'image de fond
function checkHeroImage() {
    const hero = document.querySelector('.hero');
    const img = new Image();

    img.onload = function() {
        console.log('✅ Image de fond chargée avec succès');
        hero.style.backgroundImage = `url('vienne_pop_background.jpg')`;
    };

    img.onerror = function() {
        console.log('❌ Image de fond non trouvée, utilisation du fallback');
        document.body.classList.add('no-image');
        hero.style.backgroundImage = 'none';
    };

    img.src = 'vienne_pop_background.jpg';
}

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier l'image de fond
    checkHeroImage();

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateContactForm()) {
                contactForm.submit();

                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;

                submitBtn.textContent = 'Message envoyé !';
                submitBtn.disabled = true;
                submitBtn.style.background = '#28a745';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    function validateContactForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        let isValid = true;

        clearErrors();

        if (name.value.trim() === '') {
            showError(name, 'Le nom est requis');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, 'Veuillez entrer un email valide');
            isValid = false;
        }

        if (subject.value === '') {
            showError(subject, 'Veuillez choisir un sujet');
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, 'Le message doit contenir au moins 10 caractères');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        input.style.borderColor = '#e74c3c';

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;

        input.parentNode.appendChild(errorDiv);
    }

    function clearErrors() {
        if (!contactForm) return;

        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '#e1e5e9';
        });

        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
    }

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.programme-card, .contact-container');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animation pour les réseaux sociaux
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // 🔊 Effet sonore sur le lien du questionnaire
    const lien = document.querySelector(".son-lien");
    const audio = document.getElementById("son-questionnaire");

    if (lien && audio) {
        lien.addEventListener("mouseenter", () => {
            audio.currentTime = 0;
            audio.play();
        });
    }
});

// Fonction pour tester le chargement des ressources
function testResources() {
    console.log('🔍 Test des ressources...');

    const cssLink = document.querySelector('link[href*="style.css"]');
    if (cssLink) {
        console.log('✅ Lien CSS trouvé:', cssLink.href);
    } else {
        console.log('❌ Lien CSS non trouvé');
    }

    const scripts = document.querySelectorAll('script[src*="script.js"]');
    if (scripts.length > 0) {
        console.log('✅ Script JS chargé');
    } else {
        console.log('❌ Script JS non chargé');
    }

    const img = new Image();
    img.onload = function() {
        console.log('✅ Image de fond trouvée');
    };
    img.onerror = function() {
        console.log('❌ Image de fond non trouvée');
    };
    img.src = 'vienne_pop_background.jpg';
}

window.addEventListener('load', testResources);
