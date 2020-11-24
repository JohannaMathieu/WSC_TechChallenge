//display thank you message after submitting message

const message =
  "Thank you for submitting your message. We will get back to you shortly.";

document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
