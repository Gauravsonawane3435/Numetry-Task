document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    document.querySelector(".theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Contact Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("formStatus").innerText = "Message Sent Successfully!";
    });

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
