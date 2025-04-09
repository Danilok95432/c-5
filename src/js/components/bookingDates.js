import AirDatepicker from "air-datepicker";

const bookingDatesWrapper = document.querySelector(".booking-dates");
if (bookingDatesWrapper) {
  const checkinInput = bookingDatesWrapper.querySelector("._checkin");
  const checkoutInput = bookingDatesWrapper.querySelector("._checkout");

  const setStartDate = (input) => {
    const inputValue = input.value;
    return inputValue ? new Date(inputValue) : new Date();
  };

  const checkinDatepicker = new AirDatepicker(checkinInput, {
    selectedDates: [setStartDate(checkinInput)],
    minDate: new Date(),
    onSelect: ({ date }) => {
      // Вычисляем дату для checkout (следующий день)
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);

      // Обновляем параметры checkoutDatepicker
      checkoutDatepicker.update({
        minDate: nextDay,
        selectedDates: [nextDay],
      });
    },
  });

  const checkoutDate = new Date(checkinDatepicker.selectedDates[0]);
  checkoutDate.setDate(checkoutDate.getDate() + 1);
  const checkoutDatepicker = new AirDatepicker(checkoutInput, {
    selectedDates: [checkoutDate],
    minDate: new Date(
      checkinDatepicker.selectedDates[0].getTime() + 1000 * 60 * 60 * 24
    ),
    onSelect: ({ date }) => {
      if (date <= checkinDatepicker.selectedDates[0]) {
        checkoutDatepicker.clear();
      }
    },
  });

  const allDateInputs = [checkinInput, checkoutInput];
  allDateInputs.forEach((dateInput) => {
    dateInput.addEventListener("keydown", (e) => e.preventDefault());
    dateInput.addEventListener("paste", (e) => e.preventDefault());
  });
}
