(function() {
  const carousel = document.querySelector('ul.carousel')
  const items = document.querySelectorAll('ul.carousel > *')
  const buttonLeft = document.querySelector('#carousel button.left')
  const buttonRight = document.querySelector('#carousel button.right')
  const initialOffset = 876 - (1068 - 876)/2
  let { start: currentIndex = 0} = carousel.dataset
  currentIndex = Number(currentIndex)

  currentIndex = currentIndex >= items.length || currentIndex < 0 ? 0 : Math.floor(currentIndex)
  const offset = currentIndex === 0 ? 0 : initialOffset + 876*(currentIndex-1)
  carousel.style.transform = `translateX(-${offset}px)`
  items[currentIndex].style.transform = 'scale(1)'

  const next = () => {
    // if we are in the end, do nothing
    if (currentIndex+1 >= items.length) {
      return
    }
    // remove event listener set before and update styles
    items[currentIndex+1].removeEventListener('click', next)
    if (currentIndex-1 >=0) items[currentIndex-1].removeEventListener('click', previous)
    items[currentIndex].removeAttribute('style')
    // update the current index
    currentIndex++
    // add new event listeners based on current position and update styles
    carousel.style.transform = `translateX(-${initialOffset + 876*(currentIndex-1)}px)`
    items[currentIndex].style.transform = 'scale(1)'
    if (currentIndex+1 < items.length) items[currentIndex+1].addEventListener('click', next)
    items[currentIndex-1].addEventListener('click', previous)
  }

  const previous = () => {
    // if we are in the start, do nothing
    if (currentIndex <= 0) {
      return
    }
    // remove event listener set before and update styles
    if (currentIndex+1 < items.length) items[currentIndex+1].removeEventListener('click', next)
    items[currentIndex-1].removeEventListener('click', previous)
    items[currentIndex].removeAttribute('style')
    // update the current index
    currentIndex--
    // add new event listeners based on current position and update styles
    const offset = currentIndex === 0 ? 0 : initialOffset + 876*(currentIndex-1)
    carousel.style.transform = `translateX(-${offset}px)`
    items[currentIndex].style.transform = 'scale(1)'
    items[currentIndex+1].addEventListener('click', next)
    if (currentIndex-1 >=0) items[currentIndex-1].addEventListener('click', previous)
  }

  const showButtons = () => {
    buttonLeft.style.visibility = 'visible'
    buttonRight.style.visibility = 'visible'
  }

  const hideButtons = () => {
    buttonLeft.style.visibility = 'hidden'
    buttonRight.style.visibility = 'hidden'
  }

  buttonLeft.addEventListener('click', previous)
  buttonRight.addEventListener('click', next)

  const carouselContainer = document.querySelector('#carousel')

  carouselContainer.addEventListener('mouseenter', showButtons)
  carouselContainer.addEventListener('mouseleave', hideButtons)

  if (currentIndex+1 < items.length) items[currentIndex+1].addEventListener('click', next)
  if (currentIndex-1 >=0) items[currentIndex-1].addEventListener('click', previous)

})()