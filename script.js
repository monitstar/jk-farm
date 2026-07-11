const bookingForm = document.querySelector("#bookingForm");
const successMessage = document.querySelector("#successMessage");

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz112x4OOy0CxUl6cX9NUMm0hDqjW_DcNQlaLYOMZeTckzou649HWqLztXukAXmtMqv/exec";

if (bookingForm && successMessage) {
  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("fullName", bookingForm.elements.fullName.value);
    formData.append("mobile", bookingForm.elements.mobile.value);
    formData.append("email", bookingForm.elements.email.value);
    formData.append("date", bookingForm.elements.date.value);
    formData.append("timeSlot", bookingForm.elements.timeSlot.value);
    formData.append("package", bookingForm.elements.package.value);
    formData.append("guests", bookingForm.elements.guests.value);
    formData.append("notes", bookingForm.elements.notes.value);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    successMessage.hidden = false;
    successMessage.textContent =
      "Thank you! We received your booking request. Please send your payment screenshot on WhatsApp. We will verify payment and confirm your slot by email/WhatsApp.";

    bookingForm.reset();
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
