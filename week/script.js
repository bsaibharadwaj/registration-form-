document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordMismatch = document.getElementById('passwordMismatch');
    
    if (password !== confirmPassword) {
        passwordMismatch.style.display = 'block';
    } else {
        passwordMismatch.style.display = 'none';
        alert('Form submitted successfully!');
        // Perform further form submission logic here, such as sending data to the server
    }
});


