// Feature 1: Dark Mode & Light Mode Toggle


// 1. Select the toggle button from the navigation bar
const themeToggleBtn = document.getElementById("theme-toggle");

// 2. Define the function that switches the theme
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the <body> element to swap CSS variables
    document.body.classList.toggle("dark-mode");

    // Update the button text depending on which mode is currently active
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
}

// 3. Run the function whenever the user clicks the button
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleDarkMode);
}



// Feature 2: Time-Based Welcome Pop-Up Modal


const welcomeModal = document.getElementById("welcome-modal");
const modalGreeting = document.getElementById("modal-greeting");
const closeModalBtn = document.getElementById("close-modal-btn");
const welcomeHeading = document.getElementById("welcome-greeting");

function showWelcomePopup() {
    const currentHour = new Date().getHours();
    let timeGreeting = "";

    // Checking whatever time it is to give the right greeting
    if (currentHour < 12) {
        timeGreeting = "Good Morning!";
    } else if (currentHour < 18) {
        timeGreeting = "Good Afternoon!";
    } else {
        timeGreeting = "Good Night!";
    }

    // Update both the page heading and the pop-up title
    if (welcomeHeading) { 
    }
    modalGreeting.textContent = timeGreeting + " Welcome to My Domain";

    // Display the pop-up box on the screen
    welcomeModal.style.display = "flex";
}

// Run on Home page load and close when "Okay" is clicked
if (welcomeModal && closeModalBtn) {
    showWelcomePopup();

    closeModalBtn.addEventListener("click", function () {
        welcomeModal.style.display = "none";
    });
}



// Feature 3: Back-to-Top Floating Button


// 1. Select the floating button from the HTML
const backToTopBtn = document.getElementById("back-to-top");

// 2. Show the button when scrolled down 100px, hide it near the top
function toggleBackToTopButton() {
    if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// 3. Smoothly scroll back to the top of the page when clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// 4. Attach the scroll and click event listeners
if (backToTopBtn) {
    window.addEventListener("scroll", toggleBackToTopButton);
    backToTopBtn.addEventListener("click", scrollToTop);
}




// Feature 4: Show / Hide "Read More" Content

// 1. Select the button and the hidden paragraph from the About page
const readMoreBtn = document.getElementById("read-more-btn");
const careerMoreText = document.getElementById("career-more-text");

// 2. Toggle the paragraph visibility and update button text on click
function toggleCareerDetails() {
    if (careerMoreText.style.display === "none") {
        careerMoreText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } else {
        careerMoreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
}

// 3. Only attach the click listener when we are on the About page
if (readMoreBtn && careerMoreText) {
    readMoreBtn.addEventListener("click", toggleCareerDetails);
}
