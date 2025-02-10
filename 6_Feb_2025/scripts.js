document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function() {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Switch to Light Mode";
        localStorage.setItem("theme", "dark");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "Switch to Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
