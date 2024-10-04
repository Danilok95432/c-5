import AirDatepicker from 'air-datepicker'

const bookingDatesWrapper = document.querySelector('.booking-dates')
if (bookingDatesWrapper) {
  const checkinInput = bookingDatesWrapper.querySelector('._checkin')
  const checkoutInput = bookingDatesWrapper.querySelector('._checkout')


  const setStartDate = (input) => {
    const inputValue = input.value
    return inputValue ? new Date(inputValue) : new Date()
  }

  const checkoutDatepicker = new AirDatepicker(checkoutInput, {
    selectedDates: [setStartDate(checkoutInput)],
    minDate: new Date(),

  })

  new AirDatepicker(checkinInput, {
    selectedDates: [setStartDate(checkinInput)],
    minDate: new Date(),
    onSelect: ({ date }) => {
      if (checkoutDatepicker.selectedDates[0] < date) {
        checkoutDatepicker.update({
          minDate: date,
          selectedDates: [date]
        })
      }
    },
  })


  const allDateInputs = [checkinInput, checkoutInput]
  allDateInputs.forEach((dateInput) => {
    dateInput.addEventListener('keydown', (e) => e.preventDefault())
    dateInput.addEventListener('paste', (e) => e.preventDefault())
  })
}
