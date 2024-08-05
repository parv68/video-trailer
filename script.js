const btnEl = document.querySelector('.btn')
const iconEl = document.querySelector('.close-icon')
const trailerEl = document.querySelector('.trailer-container')

btnEl.addEventListener('click', () => {
  trailerEl.classList.remove('active')
})
iconEl.addEventListener('click', () => {
  trailerEl.classList.add('active')
})