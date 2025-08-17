// Скрипт для автоматической прокрутки слайдера
const images = document.querySelectorAll('.slider img')
let current = 0

function slider() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('active')
	}
	images[current].classList.add('active')
	current = (current + 1) % images.length
}

setInterval(slider, 5000) // Меняем изображение каждые 5 секунд

function toggleDetails(teamId) {
	const details = document.getElementById(teamId)
	if (details.style.display === 'none' || details.style.display === '') {
		details.style.display = 'block'
	} else {
		details.style.display = 'none'
	}
}
