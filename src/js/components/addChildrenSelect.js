import Choices from "choices.js";
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
        childrenChoices.setChoiceByValue('');

        const deleteBtn = templateElement.querySelector('.custom-select__delete-btn')
        deleteBtn.addEventListener('click', (e) => {
          templateElement.remove()
        })

        const choices = new Choices(templateElementSelect , {
          searchEnabled: false,
          itemSelectText: '',
          shouldSort: false,
          allowHTML: true
        })

        choices.setChoiceByValue(e.detail.value);

      })
    })
  }
}

const mainChildrenSelects = document.querySelectorAll('.children-select.custom-select__main-children select')

initChildrenSelects(mainChildrenSelects)
