const btnShow = document.querySelector('.rooms-list__btn-show')

if (btnShow) {
  btnShow.addEventListener('click', () => {
    const roomsList = btnShow.closest('.rooms-list ')
    roomsList.classList.toggle('_show-all')
  })
}

