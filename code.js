const filmsTitle = document.getElementById('filmsTitle')
let countClickFilmsTitle = 0
filmsTitle.addEventListener('click', (e) => {
  if (countClickFilmsTitle === 0) {
    e.target.classList.remove('yellow')
    e.target.classList.add('green')
    countClickFilmsTitle++
  } else {
    e.target.classList.add('yellow')
    e.target.classList.remove('green')
    countClickFilmsTitle--
  }
})

const filmsList = document.querySelector('#filmsList')
let countClickFilmsList = 0
filmsList.addEventListener('click', (e) => {
  if (countClickFilmsList === 0) {
    filmsList.classList.add('yellow')
    filmsList.classList.remove('green')
    countClickFilmsList++
  } else {
    filmsList.classList.remove('yellow')
    filmsList.classList.add('green')
    countClickFilmsList--
  }
})

const buttons = document.querySelectorAll('.buttons button')
const imageContainer = document.getElementById('imageContainer')

buttons.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (e.target.name === 'add') {
      const newUrl = prompt('Введіть нове посилання на картинку')
      imageContainer.innerHTML = `<img src=${newUrl} alt="New photo"/>`
    } else if (e.target.name === 'increase') {
      imageContainer.children[0].classList.add('increase')
    } else if (e.target.name === 'reduce') {
      imageContainer.children[0].classList.remove('increase')
    } else if (e.target.name === 'remove') {
      imageContainer.children[0].remove()
    }
  })
})
