document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bgContainer = document.querySelector('.background-container');

    // currentImageIndex is set globally by inline script
    let currentImageIndex = (typeof window.currentImageIndex !== 'undefined') ? window.currentImageIndex : 0;

    function updateBackground() {
        bgContainer.style.backgroundImage = `url('${window.bgImages[currentImageIndex]}')`;
        sessionStorage.setItem('bgIndex', currentImageIndex);
        currentImageIndex = (currentImageIndex + 1) % window.bgImages.length;
    }

    setInterval(() => {
        bgContainer.classList.remove('show');
        setTimeout(() => {
            updateBackground();
            bgContainer.classList.add('show');
        }, 1500);
    }, 10000);

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
