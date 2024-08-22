const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        // Send a request to the server to register the user
        // For demonstration purposes, we'll just log the data to the console
        console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    }
});