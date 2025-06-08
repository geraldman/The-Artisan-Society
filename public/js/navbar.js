var prevScrollpos = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById("mainNavbar").style.top = "0";
    }
    else{
        document.getElementById("mainNavbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
};

document.addEventListener('DOMContentLoaded', () => {
    const mainNavbar = document.getElementById('mainNavbar');
    const menuBar = document.querySelector('.menubar img');
    const navLink = document.querySelector('.nav-link');

    // Function to check screen width
    const isMobile = () => window.innerWidth < 768;

    // Initially hide nav links on mobile
    if (isMobile()) {
        navLink.style.display = 'none';
    }

    menuBar.addEventListener('click', () => {
        if (isMobile()) {
            if (navLink.style.display === 'none' || navLink.style.display === '') {
                navLink.style.display = 'flex'; // Show the nav links
                // Optional: Adjust mainNavbar position if it covers content
                // mainNavbar.style.position = 'absolute';
                // mainNavbar.style.top = '0';
            } else {
                navLink.style.display = 'none'; // Hide the nav links
                // Optional: Reset mainNavbar position
                // mainNavbar.style.position = 'fixed';
            }
        }
    });

    // Add a resize listener to handle transitions between mobile and desktop
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            navLink.style.display = 'flex'; // Always show nav links on desktop
            // mainNavbar.style.position = 'fixed'; // Ensure navbar is fixed on desktop
        } else {
            // If resizing to mobile and links were visible, hide them
            if (navLink.style.display === 'flex' && menuBar.style.display !== 'none') {
                 navLink.style.display = 'none';
            }
        }
        // Ensure menuBar image visibility based on screen width
        if (isMobile()) {
            menuBar.style.display = 'block';
        } else {
            menuBar.style.display = 'none';
        }
    });

    // Initial check for menuBar display on load
    if (isMobile()) {
        menuBar.style.display = 'block';
    } else {
        menuBar.style.display = 'none';
    }
});