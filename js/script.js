(function() {
  const carousel = document.querySelector('ul.carousel')
  const items = document.querySelectorAll('ul.carousel > *')
  const buttonLeft = document.querySelector('#carousel button.left')
  const buttonRight = document.querySelector('#carousel button.right')
  const initialOffset = 876 - (1068 - 876)/2
  let { start: currentIndex = 0} = carousel.dataset
  currentIndex = Number(currentIndex)

  carousel.style.transform = `translateX(-${initialOffset + 876*(currentIndex-1)}px)`
    items[currentIndex].style.transform = 'scale(1)'

  const next = () => {
    console.log(currentIndex)
    if (currentIndex+1 >= items.length) {
      return
    }
    items[currentIndex].removeAttribute('style')
    currentIndex++
    carousel.style.transform = `translateX(-${initialOffset + 876*(currentIndex-1)}px)`
    items[currentIndex].style.transform = 'scale(1)'
  }

  const previous = () => {
    console.log(currentIndex)
    if (currentIndex <= 0) {
      return
    }
    items[currentIndex].removeAttribute('style')
    currentIndex--
    const offset = currentIndex === 0 ? 0 : initialOffset + 876*(currentIndex-1)
    carousel.style.transform = `translateX(-${offset}px)`
    items[currentIndex].style.transform = 'scale(1)'
  }

  buttonLeft.addEventListener('click', previous)
  buttonRight.addEventListener('click', next)

})()