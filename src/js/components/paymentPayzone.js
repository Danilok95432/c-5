import {formToObj, sendData, serializeForm, showInfoModal} from '../_functions'

const paymentPayzone = document.querySelector('form.payZone')

if (paymentPayzone) {
  paymentPayzone.addEventListener('submit',  async (e) => {
    e.preventDefault()

    const data = serializeForm(e.currentTarget)
    const objData = formToObj(data)

    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, e.currentTarget.action)
      const finishedResponse = await response.json()

      const { status, errortext, confirmation_url } = finishedResponse

      if (status === 'ok') {
        location.href = confirmation_url
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }


  })
}
