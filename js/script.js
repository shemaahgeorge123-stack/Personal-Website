// ==========================================
// Feature 1: Dark Mode / Light Mode Toggle
// ==========================================

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
