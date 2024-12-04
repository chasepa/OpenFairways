document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Select the form
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const phoneInput = document.getElementById("phone-number");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        let errors = []; // Array to store error messages

        // Validate first name (minimum 3 characters)
        if (firstNameInput.value.trim().split(" ").join("").length < 3) {
            errors.push("First name must be at least 3 characters long.");
        }

        // Validate last name (minimum 3 characters)
        if (lastNameInput.value.trim().split(" ").join("").length < 3) {
            errors.push("Last name must be at least 3 characters long.");
        }

        // Validate phone number (10 digits only)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            errors.push("Phone number must be a valid 10-digit number.");
        }

        // Validate email address (must match valid email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            alert(errors.join("\n")); // Display error messages
        }
    });
});
