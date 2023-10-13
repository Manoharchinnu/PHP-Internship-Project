document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector("#registrationForm");
    const loginForm = document.querySelector("#loginForm");

    // Registration form submit event
    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            const password = registrationForm.querySelector("#password").value;
            const confirmPassword = registrationForm.querySelector("#confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                event.preventDefault();
            }
        });
    }

    // Login form submit event
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            const email = loginForm.querySelector("#loginEmail").value;
            const password = loginForm.querySelector("#loginPassword").value;

            if (!email || !password) {
                alert("Please fill in both email and password fields.");
                event.preventDefault();
            }
        });
    }
});
