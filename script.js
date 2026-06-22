const bookingForm = document.querySelector("#bookingForm");
const successMessage = document.querySelector("#successMessage");

if (bookingForm && successMessage) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Google Forms connection point:
    // Later, collect new FormData(bookingForm) here and submit it to your Google Forms endpoint.
    // Keep payment manual; do not process payment automatically from this static website.

    successMessage.hidden = false;
    bookingForm.reset();
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
