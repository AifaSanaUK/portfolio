

function validateForm() {
  // Clear previous error messages
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("phone-error").innerHTML = "";
  document.getElementById("message-error").innerHTML = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate Name
  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("name-error").innerHTML = "Fill this area with valid letters.";
    isValid = false;
  }

  // Validate Email
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    document.getElementById("email-error").innerHTML = "Fill this area with a valid email.";
    isValid = false;
  }

  // Validate Phone
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phone-error").innerHTML = "Fill this area with a valid 10-digit number.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("message-error").innerHTML = "Fill this area.";
    isValid = false;
  }

  return isValid; // Prevents form submission if invalid
}

// EmailJS Integration
emailjs.init("ieFU_uxzYZ7rJXG-n"); // Replace with your actual EmailJS User ID

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  if (validateForm()) {
    emailjs.sendForm("service_n9jqkrh", "template_1gx8u1n", "#contact-form")
      .then(
        function (response) {
          alert("Message sent successfully!");
          console.log("SUCCESS!", response);
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.log("FAILED...", error);
        }
      );
  }
});
