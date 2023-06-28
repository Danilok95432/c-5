
const findResForm = document.querySelector('.find-res-form')

if (findResForm) {
  window.addEventListener('scroll', () => {
    let formCoord = findResForm.getBoundingClientRect().y + 200

    if (scrollY > formCoord) {
      findResForm.classList.add('_fixed')
    } else {
      findResForm.classList.remove('_fixed')
    }
  } )
}

