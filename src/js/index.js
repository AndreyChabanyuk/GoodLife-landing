document.addEventListener('DOMContentLoaded', function () {
	const headerSearchOpen = document.querySelector('#search-open')
	const headerSearchWrapper = document.querySelector('#header-search-wrapper')

	headerSearchOpen.addEventListener('click', () => {
    headerSearchWrapper.classList.toggle('none')
	})
})



// Анимация появления search

headerSearchOpen('aminationend',AnimationHandler,false)

function AnimationHandler(){

}