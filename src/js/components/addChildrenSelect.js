import Choices from 'choices.js'


const calcChildInput = (triggerSelect) => {
  const room = triggerSelect.closest('.booking-form__row')
  const childWrapper = room.querySelector('.custom-select__children-wrapper')
  const roomAmount = room?.querySelector('.changeable-amount')?.textContent

  // логика установки name у селектов "Дети"
  const selectsListInputs = childWrapper.querySelectorAll('select:not(.trigger-select)')
  selectsListInputs.forEach((select, idx) => {
    select.name = `[${roomAmount ?? 0}][${idx}]`
  })

  //логика установки количества детей в value инпута
  const childInputCounter = room.querySelector('.booking-form__children-counter')
  childInputCounter.value = selectsListInputs.length
}

export const initChildrenSelects = (childrenSelectNodes) => {
  if (childrenSelectNodes) {

    childrenSelectNodes.forEach(mainSelect => {
      const childrenChoices = new Choices(mainSelect, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        allowHTML: true
      })
      mainSelect.addEventListener('change', (e) => {
        let templateFragment = document.querySelector('#children-select')?.content
        let templateElement = templateFragment.firstElementChild.cloneNode(true)

        let templateElementSelect = templateElement.querySelector('select')
        const selectsList = e.target.closest('.custom-select__children-wrapper')
        selectsList.insertAdjacentElement('afterbegin', templateElement)
        childrenChoices.setChoiceByValue('')
        calcChildInput(mainSelect)
        const deleteBtn = templateElement.querySelector('.custom-select__delete-btn')
        deleteBtn.addEventListener('click', () => {
          templateElement.remove()
          calcChildInput(mainSelect)
        })

        const choices = new Choices(templateElementSelect, {
          searchEnabled: false,
          itemSelectText: '',
          shouldSort: false,
          allowHTML: true
        })

        choices.setChoiceByValue(e.detail.value)

      })
    })
  }
}

const mainChildrenSelects = document?.querySelectorAll('.children-select.custom-select__main-children select')

initChildrenSelects(mainChildrenSelects)
