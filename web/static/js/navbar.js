const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const header = document.querySelector('header');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')

})

toggleButton.addEventListener('click', () => {
  header.classList.toggle('toggle-active')
})

