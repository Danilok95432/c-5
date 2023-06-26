import Choices from "choices.js"


const initSelects = () => {
  const mainSelects = document.querySelectorAll('.main-select select')

  if (mainSelects) {
    mainSelects.forEach(select => {
      const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        allowHTML: true
      })
    })
  }
}

initSelects()

export {
  initSelects
}


