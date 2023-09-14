import { serializeForm, formToObj } from "../_functions";

// проверка дат въезда и выезда на странице Бронирование

if (document.querySelector(".booking-page")) {
  const bookingForm = document.querySelector(".booking-form");

  bookingForm.addEventListener("submit", (e) => {
    const serialized_form = serializeForm(e.currentTarget);
    const data = formToObj(serialized_form);

    const startDate = new Date(
      data["check_in"].split(".").reverse().join(", ")
    );
    const endDate = new Date(data["check_out"].split(".").reverse().join(", "));

    if (new Date(startDate) > new Date(endDate)) {
      e.preventDefault();
      alert("Дата выезда должна быть позже въезда");
    }
  });
}
