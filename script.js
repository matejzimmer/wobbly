const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const form = document.getElementById("interest-form");
const message = document.getElementById("form-message");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email");

    if (typeof email !== "string" || !email.includes("@")) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "#b91c1c";
      return;
    }

    message.textContent = "Thanks! We will share Wobbly updates soon.";
    message.style.color = "#065f46";
    form.reset();
  });
}
