document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        //stop reload of page
        e.preventDefault(); 
        // Get input values from the form 
        const name = form.querySelector("input[placeholder='Your Name']").value;
        const email = form.querySelector("input[placeholder='Your Email']").value;
        const phone = form.querySelector("input[placeholder='Your Phone Number']").value;
        const message = form.querySelector("textarea").value;
        // Print values to the console
        console.log("Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", message);

        // Show alert message to the user
        alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
        // Clear the form
        form.reset();
    });
});