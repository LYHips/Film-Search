// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Search functionality
const searchBox = document.querySelector('.search-box');
const movieCards = document.querySelectorAll('.movie-card');

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    movieCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.7))';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)';
    }
});

// Add hover effect to movie cards
movieCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = 'auto';
    });
});

// Play button functionality
const playButtons = document.querySelectorAll('.btn-primary');
playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🎬 Відео починає програватись...');
    });
});

// Info button functionality
const infoButtons = document.querySelectorAll('.btn-secondary');
infoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('ℹ️ Додаткова інформація про фільм...');
    });
});

// Lazy loading for images (simple implementation)
function lazyLoadImages() {
    const images = document.querySelectorAll('.movie-image');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                imageObserver.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        image.style.opacity = '0';
        image.style.transition = 'opacity 0.5s ease-in';
        imageObserver.observe(image);
    });
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press '/' to focus search box
    if (e.key === '/') {
        e.preventDefault();
        searchBox.focus();
    }
    
    // Press 'Escape' to clear search
    if (e.key === 'Escape') {
        searchBox.value = '';
        movieCards.forEach(card => {
            card.style.display = 'block';
        });
    }
});

// Add a simple loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

console.log('Netflix Clone - Проєкт запущено успішно! 🎬');
