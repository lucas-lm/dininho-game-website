(function() {
  const carousel = document.querySelector('ul.carousel')
  const items = document.querySelectorAll('ul.carousel > *')
  const buttonLeft = document.querySelector('#carousel button.left')
  const buttonRight = document.querySelector('#carousel button.right')
  const carouselContainer = document.querySelector('#carousel')

  let { start: currentIndex = 0} = carousel.dataset
  currentIndex = Number(currentIndex)
  currentIndex = currentIndex >= items.length || currentIndex < 0 ? 0 : Math.floor(currentIndex)

  const finger = {
    isTouching: false,
    startTime: null,
    startPosition: {x: null, y: null},
    endPosition: {x: null, y: null}
  }

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

  carouselContainer.addEventListener('touchstart', event => { 
    const { touches, timeStamp } = event
    if (!finger.isTouching && touches.length === 1) {
      finger.isTouching = true
      finger.startPosition.x = touches[0].clientX
      finger.startPosition.y = touches[0].clientY
      finger.startTime = timeStamp
    }
  })

  carouselContainer.addEventListener('touchmove', event => {
    const { touches } = event
    if (finger.isTouching) {
      finger.endPosition.x = touches[0].clientX
      finger.endPosition.y = touches[0].clientY
    }
  })

  carouselContainer.addEventListener('touchend', event => {
    if (finger.isTouching) {
      finger.isTouching = false
      const { timeStamp } = event
      const deltaX = finger.startPosition.x - finger.endPosition.x
      const deltaY = finger.startPosition.y - finger.endPosition.y
      const deltaT = timeStamp - finger.startTime
      // condition to consider a swipe
      const swipe = Math.abs(deltaX) > 50 && Math.abs(deltaY) < 250 && deltaT < 500
      if (swipe) {
        // when swipe, do it
        if (deltaX > 0) return next()
        if (deltaX < 0) return previous()
      }
    }
  })

  if (currentIndex+1 < items.length) items[currentIndex+1].addEventListener('click', next)
  if (currentIndex-1 >= 0) items[currentIndex-1].addEventListener('click', previous)

  window.addEventListener('resize', () => frame.move())

})()