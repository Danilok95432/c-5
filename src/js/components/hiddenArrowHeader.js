const menuPhone = document.querySelector('.main-menu__phone-select')

if (menuPhone) {
  const elements = menuPhone.getElementsByTagName('a')
  if (elements.length < 2) {
    const arrowSVG = document.querySelector('.arrow-phone')
    arrowSVG.style.visibility = 'hidden'
  }
}