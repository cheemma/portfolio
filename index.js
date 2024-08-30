// Add event listeners to forms
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const url = form.getAttribute("action");
            const method = form.getAttribute("method");
            fetch(url, {
                method: method,
                body: formData
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        });
    });
});

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const url = button.getAttribute("href");
            window.location.href = url;
        });
    });
});