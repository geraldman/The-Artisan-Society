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

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'reveal-img-mobile' within 'background-mobile'
    const revealImages = document.querySelectorAll('.background-mobile .reveal-img-mobile');

    // Define the base delay and increment for sequential appearance
    const baseDelay = 0; // Start delay for the first image (can be 0 or slightly more)
    const delayIncrement = 0.15; // 0.15 seconds delay between each image

    // Iterate over each image to apply a sequential transition delay
    revealImages.forEach((image, index) => {
        // Calculate the delay for each image based on its index
        const delay = baseDelay + (index * delayIncrement);
        // Apply the calculated delay as an inline style to the 'transition-delay' property
        image.style.transitionDelay = `${delay}s`;
    });

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root element for intersection checking
        rootMargin: '0px', // No margin around the root
        threshold: 0.2 // Trigger when 20% of the target element is visible
    };

    // Create a new Intersection Observer instance
    const imageObserver = new IntersectionObserver((entries, observer) => {
        // Iterate over each 'entry' observed by the Intersection Observer
        entries.forEach(entry => {
            // Check if the element is currently intersecting (in view)
            if (entry.isIntersecting) {
                // If in view, add the 'is-visible' class to trigger the CSS animation
                entry.target.classList.add('is-visible');
                // Stop observing the element once it becomes visible (animates once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions); // Pass the defined options to the observer

    // Attach the Intersection Observer to each image
    revealImages.forEach(image => {
        imageObserver.observe(image);
    });
});

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            ".loader-container").style.visibility = "visible";
    } else {
        document.querySelector(
            ".loader-container").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};