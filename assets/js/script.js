document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const images = [
        'assets/img/background1.png',
        'assets/img/background2.png',
        'assets/img/background3.png',
        'assets/img/background4.png',
        'assets/img/background5.png',
        'assets/img/background6.png'
    ];

    let currentImageIndex = parseInt(sessionStorage.getItem('bgIndex')) || 0;

    // Create and append the background container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'background-container show';
    document.body.insertBefore(bgContainer, document.body.firstChild);

    function updateBackground() {
        bgContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        sessionStorage.setItem('bgIndex', currentImageIndex);
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Initial background setup
    updateBackground();

    // Cycle backgrounds every 10 seconds
    setInterval(() => {
        bgContainer.classList.remove('show');
        setTimeout(() => {
            updateBackground();
            bgContainer.classList.add('show');
        }, 1500);
    }, 10000);

    // Mobile Nav Toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
