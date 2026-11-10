// Find the button and the message area on the page
const button = document.getElementById("hello-button");
const message = document.getElementById("message");

// When the button is clicked, show a friendly greeting
button.addEventListener("click", function () {
  message.textContent = "Hello! Welcome to my first AI-built application.";
  message.classList.add("visible");
});
