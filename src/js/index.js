document.addEventListener('DOMContentLoaded', function () {
	const headerSearchOpen = document.querySelector('#search-open')
	const headerSearchWrapper = document.querySelector('#header-search-wrapper')

	headerSearchOpen.addEventListener('click', () => {
    headerSearchWrapper.classList.toggle('none')
	})
})



const menuToggle = document.querySelector('#menu-toggle')
const bodyEl = document.body
const headerMenu = document.querySelector('#head-menu')
if (menuToggle) {
	menuToggle.addEventListener('click', () => {
		if (menuToggle.classList.contains('active')) {
			menuToggle.classList.remove('active')
			headerMenu.classList.remove('active')
			bodyEl.classList.remove('lock')
		} else {
			menuToggle.classList.add('active')
			headerMenu.classList.add('active')
			bodyEl.classList.add('lock')
		}
	})
}