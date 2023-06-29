import AirDatepicker from "air-datepicker"
import tr from 'air-datepicker/locale/tr'

export const initAllDates = () => {
  const allDateInputs = document.querySelectorAll('input[data-date-start]')
  const bookingCalendars = document.querySelectorAll('.booking-calendar input')

  if (allDateInputs) {
    allDateInputs.forEach(el => {
      const {dateStart} = el.dataset
      const formatDate = dateStart.split(".").reverse().join(".")

      const customDate = new AirDatepicker(el, {
        startDate: formatDate,
        container: '.date-custom-container',
      })

      el.addEventListener('click', (e) => {
        const featuredDate = e.currentTarget.value.split('.').reverse().join('-')
        if (featuredDate) {
          customDate.selectDate(featuredDate)
          customDate.setViewDate(featuredDate)
        }
      })
    })
  }

  if (bookingCalendars) {
    bookingCalendars.forEach(calendar => {
      const formatDate = new Date()

      const customDate = new AirDatepicker(calendar, {
        startDate: formatDate,
        container: '.date-custom-container',
        selectedDates: [formatDate],
        minDate: [formatDate],
        range: true,
        multipleDatesSeparator: ' - ',
      })

      calendar.addEventListener('click', (e) => {
        const featuredDate = e.currentTarget.value.split('.').reverse().join('-')
        if (featuredDate) {
          customDate.selectDate(featuredDate)
          customDate.setViewDate(featuredDate)
        }
      })
    })
  }


}

initAllDates()





