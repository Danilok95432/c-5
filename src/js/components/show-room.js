const listItems = document.querySelectorAll('.rooms-list__item')
const btnShow = document.querySelector('.rooms-list__btn-show')

btnShow.addEventListener('click', ()=>{
    btnShow.classList.toggle('_active');
    listItems.forEach(item=>{
        item.classList.toggle('_show')
    })
})