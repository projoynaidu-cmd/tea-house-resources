// Simple animation on scroll
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    // Add hover effect on mobile when tapped
    if (window.innerWidth < 768) {
        cards.forEach(card => {
            card.addEventListener('touchstart', function () {
                this.classList.add('hover:scale-105');
            }, { passive: true });
        });
    }
});