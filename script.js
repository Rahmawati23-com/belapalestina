// Smooth Scrolling untuk Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Auto Rotate Carousel Captions
document.addEventListener('DOMContentLoaded', function() {
    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    
    carouselCaptions.forEach(caption => {
        caption.style.opacity = '0';
        caption.style.transition = 'opacity 1s ease';
    });

    const carousel = document.getElementById('heroPalestina');
    
    carousel.addEventListener('slide.bs.carousel', function () {
        carouselCaptions.forEach(caption => {
            caption.style.opacity = '0';
        });
    });

    carousel.addEventListener('slid.bs.carousel', function () {
        const activeCaption = document.querySelector('.carousel-item.active .carousel-caption');
        activeCaption.style.opacity = '1';
    });
});

// Tambahkan interaksi pada card tim
document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelectorAll('#donasi .card');
    
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});

function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Dukung Palestina melalui program ini!");
    let shareUrl = "";

    if (platform === "facebook") {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "instagram") {
        alert("Instagram tidak mendukung berbagi tautan langsung melalui web.");
        return;
    } else if (platform === "whatsapp") {
        shareUrl = `https://api.whatsapp.com/send?text=${text} ${url}`;
    }

    if (shareUrl) {
        window.open(shareUrl, "_blank");
    }
}

// Optional - Add functionality for the search input if needed
document.querySelector('.search-input').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const faqItems = document.querySelectorAll('.accordion-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.accordion-button').textContent.toLowerCase();
        if (question.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

