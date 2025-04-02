const tarrifItems = document.querySelectorAll('.tariffs-item')
let maxHeightTarrifs = 0
let maxHeightPayments = 0
let maxHeightPayBlocks = 0

if (tarrifItems) {
  tarrifItems.forEach((item) => {
    let tariffs = item.querySelector('.tariffs-conditions')
    let payments = item.querySelector('.payment-conditions')
    let payBlocks = item.querySelector('.tariffs-item-payment')
    if (tariffs && tariffs.offsetHeight > maxHeightTarrifs)
      maxHeightTarrifs = tariffs.offsetHeight
    if (payments && payments.offsetHeight > maxHeightPayments)
      maxHeightPayments = payments.offsetHeight
    if (payBlocks && payBlocks.offsetHeight > maxHeightPayBlocks)
      maxHeightPayBlocks = payBlocks.offsetHeight
  })
  tarrifItems.forEach((item) => {
    let tariffs = item.querySelector('.tariffs-conditions')
    let payments = item.querySelector('.payment-conditions')
    let payBlocks = item.querySelector('.tariffs-item-payment')
    if(tariffs)
      tariffs.style.height = `${maxHeightTarrifs}px`
    if(payments)
      payments.style.height = `${maxHeightPayments}px`
    if(payBlocks)
      payBlocks.style.height = `${maxHeightPayBlocks}px`
  })
}