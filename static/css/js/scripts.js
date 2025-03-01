document.addEventListener("DOMContentLoaded", function () {
    console.log("Inkspire Scripts Loaded!");

    // Handle flash messages fade-out
    let flashMessages = document.querySelectorAll(".flash-message");
    flashMessages.forEach((message) => {
        setTimeout(() => {
            message.style.opacity = "0";
            setTimeout(() => message.remove(), 500);
        }, 3000);
    });

    // Toggle mobile navigation menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Form validation (Example for login/register)
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            let inputs = form.querySelectorAll("input[required]");
            let valid = true;
            
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = "1px solid red";
                } else {
                    input.style.border = "";
                }
            });

            if (!valid) {
                event.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });

    // Character count for article content
    const contentInput = document.getElementById("content");
    const charCounter = document.getElementById("char-counter");

    if (contentInput && charCounter) {
        contentInput.addEventListener("input", function () {
            charCounter.textContent = `Characters: ${contentInput.value.length}`;
        });
    }
});
