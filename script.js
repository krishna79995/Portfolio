$(document).ready(function () {
    // Fade out effect on hover
    $('#about-img').hover(
        function () {
            $(this).fadeTo('slow', 0.5); // Fade to 50% opacity on hover
        },
        function () {
            $(this).fadeTo('slow', 1); // Fade back to full opacity on mouse leave
        }
    );
});

$(document).ready(function () {
    // Animate social media icons
    $('.social-media span').each(function (index) {
        $(this)
            .delay(index * 800) // Delay for each icon (300ms interval)
            .fadeTo(3000, 1); // Fade in duration (1000ms)
    });
});



// Signup Form Validation
document.getElementById("signupForm").addEventListener("submit", function (event) {
    const fullName = document.querySelector("#signupForm input[type='text']").value;
    const email = document.getElementById('signup-email').value;
    const password = document.querySelector("#signupForm input[type='password']").value;
    const confirmPassword = document.querySelectorAll("#signupForm input[type='password']")[1].value;

    if (fullName.trim() === "") {
        alert("Full Name is required.");
        event.preventDefault();
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    if (password.trim() === "") {
        alert("Password is required.");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    // Store user credentials in local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Successfully signed up!");
    event.preventDefault(); // Prevent form submission for demonstration
});

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
    const email = document.querySelector("#loginForm input[type='text']").value;
    const password = document.querySelector("#loginForm input[type='password']").value;

    // Retrieve stored credentials from local storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    // Verify email and password
    if (email === storedEmail && password === storedPassword) {
        alert("Successfully Logged in!");
    } else {
        alert("Invalid email or password.");
        event.preventDefault();
    }
});

// Contact Form Validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
    }
});

function validateForm() {
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const subject = document.getElementById('Subject');
    const message = document.getElementById('message');

    if (!fname.value.trim()) {
        alert('Full Name is required');
        return false;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
        alert('Valid Email Address is required');
        return false;
    }

   
    if (!number.value.trim() || isNaN(number.value) || number.value.length !== 10) {
        alert('Valid 10-digit Mobile Number is required');
        return false;
    }

    if (!subject.value.trim()) {
        alert('Email Subject is required');
        return false;
    }

    if (!message.value.trim()) {
        alert('Your Message is required');
        return false;
    }

    return true; // All checks passed
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


