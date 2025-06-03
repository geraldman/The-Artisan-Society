document.addEventListener('DOMContentLoaded', () => {
    const revealImages = document.querySelectorAll('.MainLandingPage.background .reveal-img');

    // Define the base delay and increment for sequential appearance
    const baseDelay = 0; // Start delay for the first image (can be 0 or slightly more)
    const delayIncrement = 0.15; // 0.15 seconds delay between each image

    revealImages.forEach((image, index) => {
        // Calculate the delay for each image
        const delay = baseDelay + (index * delayIncrement);
        // Apply the calculated delay as an inline style
        image.style.transitionDelay = `${delay}s`;
    });

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the target is visible
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view
                entry.target.classList.add('is-visible');
                // Stop observing once it's visible if you only want it to animate once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealImages.forEach(image => {
        imageObserver.observe(image);
    });
});