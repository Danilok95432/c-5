const customInputs = document.querySelectorAll('.custom-input')


if (customInputs) {

  customInputs.forEach(inputElWrapper => {

    const targetInput = inputElWrapper.querySelector('input')

    targetInput.addEventListener('input', (e) => {
      const inputTarget = e.currentTarget

      if (inputTarget.value) {
        inputElWrapper.classList.add('_active')
      } else {
        inputElWrapper.classList.remove('_active')
      }
    })

    targetInput.addEventListener('focusin', () => {
      inputElWrapper.classList.add('_active')
    })

    targetInput.addEventListener('focusout', (e) => {
      const inputTarget = e.currentTarget

      if (!inputTarget.value) {
        inputElWrapper.classList.remove('_active')
      }

    })




  })



}
