(function () {
  const eggs = document.querySelectorAll('.egg img')
  const backdrop = document.querySelector('#backdrop')

  const checkEggs = () => {
    for (egg of eggs) {
      const wasClicked = JSON.parse(egg.dataset.clicked)
      if (!wasClicked) return false
    }
    return true
  }

  const setEggClicked = event => {
    const egg = event.target
    egg.dataset.clicked = "true"
    const isAllChecked = checkEggs()
    if (isAllChecked) {
      const keys = document.querySelector('#keys')
      keys.style.visibility = 'visible'
      backdrop.style.visibility = 'visible'
      document.querySelector('body').style = 'overflow: hidden'
    }
  }

  const exit = () => {
    keys.style.visibility = 'hidden'
    backdrop.style.visibility = 'hidden'
    document.querySelector('body').removeAttribute('style')
  }

  for (egg of eggs) {
    egg.addEventListener('click', setEggClicked)
  }
  backdrop.addEventListener('click', exit)
})()