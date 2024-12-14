// Handle Reservation Form Submission
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get values from the form
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    // Check if all fields are filled
    if (name && date && time && people) {
        const confirmationMessage = `
            <h3>Reservation Confirmed!</h3>
            <p>Thank you, ${name}! Your reservation for ${people} people on ${date} at ${time} has been successfully booked.</p>
        `;
        document.getElementById("confirmation").innerHTML = confirmationMessage;
    } else {
        document.getElementById("confirmation").innerHTML = "<p>Please fill in all the fields.</p>";
    }
});
