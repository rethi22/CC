// Handle "Book Now" button clicks
document.querySelectorAll('.concert button').forEach(button => {
    button.addEventListener('click', (event) => {
        const concertInfo = event.target.parentElement;
        const bandName = concertInfo.querySelector('h3').textContent;
        alert(`You have booked tickets for ${bandName}!`);
    });
});

// Handle form submission
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a success message (this could be replaced with actual form processing)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
