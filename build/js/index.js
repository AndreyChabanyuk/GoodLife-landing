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




// Слайдер

let headerSwiper = new Swiper('.header-slider', {
	loop: true,
	grabCursor: true,
	effect: 'creative',
	creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})



let ctaSwiper = new Swiper('.cta-slider', {
	loop: true,
	grabCursor: true,
	effect: 'creative',
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ['-20%', 0, -1],
		},
		next: {
			translate: ['100%', 0, 0],
		},
	},
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})




const infoBtns= document.querySelectorAll('.btn-footer')


	for (let btn of infoBtns) {
		btn.addEventListener('click',function(){
			this.classList.toggle('rotate')
			this.parentNode.parentNode.querySelector('ul').classList.toggle('visible')
			this.parentNode.parentNode.querySelector('ul').classList.toggle('flex')
		})
	}








