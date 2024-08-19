// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // This is where you would normally send the form data to a server
        // For this example, we will just log the data to the console
        console.log('Form Submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear the form
        document.getElementById('contact-form').reset();

        // Show a success message (you could improve this with better UI)
        alert('Thank you for your message!');
    } else {
        alert('Please fill in all fields.');
    }
});