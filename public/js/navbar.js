var prevScrollpos = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPos = window.pageYOffset;
    
    // Handling if dropdown accidentally opened when scrolling
    const dropdownContent = document.querySelector('.dropdown-content');
    const isMobile = () => window.innerWidth < 992;
    
    if(prevScrollpos > currentScrollPos){
        document.getElementById("mainNavbar").style.top = "0";
    }
    else{
        document.getElementById("mainNavbar").style.top = "-100px";
        if(isMobile()){
            dropdownContent.classList.add('hidden');
        }
    }
    prevScrollpos = currentScrollPos;
};

document.addEventListener('DOMContentLoaded', () => {
    const mainNavbar = document.getElementById('mainNavbar');
    const menuBarIcon = document.querySelector('.dropdown img');
    const navLinksContainer = document.querySelector('.nav-link');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to check screen width
    const isMobile = () => window.innerWidth < 992;

    // Initially hide nav links on mobile
    const handleNavbarState = () => {
        if (isMobile()) {
            // On mobile:
            // Hide the regular nav links (they will be managed by the dropdown)
            navLinksContainer.classList.add('hidden-mobile');
            // Show the menu icon
            menuBarIcon.classList.remove('hidden-mobile');
            // Ensure dropdown is hidden initially
            dropdownContent.classList.add('hidden');
        } else {
            // On desktop:
            // Show the regular nav links
            navLinksContainer.classList.remove('hidden-mobile');
            // Hide the menu icon
            menuBarIcon.classList.add('hidden-mobile');
            // Ensure dropdown is hidden (not applicable on desktop, but good to reset)
            dropdownContent.classList.add('hidden');
        }
    };

    // Event listener for the menu icon click
    menuBarIcon.addEventListener('click', () => {
        if (isMobile()) {
            // Toggle the 'hidden' class on the dropdown content
            // This will make it appear/disappear based on CSS rules
            dropdownContent.classList.toggle('hidden');
        }
    });

    // Initial setup when the page loads
    handleNavbarState();

    // Listen for window resize events to adjust navbar state
    window.addEventListener('resize', handleNavbarState);
});