(function() {
  const carousel = document.querySelector('ul.carousel')
  const items = document.querySelectorAll('ul.carousel > *')
  const buttonLeft = document.querySelector('#carousel button.left')
  const buttonRight = document.querySelector('#carousel button.right')
  const carouselContainer = document.querySelector('#carousel')

  let { start: currentIndex = 0} = carousel.dataset
  currentIndex = Number(currentIndex)
  currentIndex = currentIndex >= items.length || currentIndex < 0 ? 0 : Math.floor(currentIndex)

  const frame = {
    get width() {
      return items[currentIndex].clientWidth
    },
    get containerWidth() {
      return carouselContainer.clientWidth
    },
    get initialOffset() {
      return this.width - (this.containerWidth - this.width)/2
    },
    get offset() {
      return currentIndex === 0 ? 0 : this.initialOffset + this.width*(currentIndex-1)
    },
    move() {
      carousel.style.transform = `translateX(-${this.offset}px)`
      items[currentIndex].style.transform = 'scale(1)'
      items[currentIndex].style.cursor = 'initial'
    }
  }

  frame.move()

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
    // update styles
    frame.move()
    // add new event listeners based on current position 
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
    // update styles
    frame.move()
    // add new event listeners based on current position
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

  carouselContainer.addEventListener('mouseenter', showButtons)
  carouselContainer.addEventListener('mouseleave', hideButtons)

  if (currentIndex+1 < items.length) items[currentIndex+1].addEventListener('click', next)
  if (currentIndex-1 >= 0) items[currentIndex-1].addEventListener('click', previous)

  window.addEventListener('resize', () => frame.move())

})()