const passwordInput = document.getElementById('password')
			const confirmPasswordInput = document.getElementById('confirmPassword')
			const errorMessage = document.getElementById('error-message')
			const form = document.getElementById('RegistrForm')
			const togglePassword = document.getElementById('togglePassword')
			const toggleConfirmPassword = document.getElementById(
				'toggleConfirmPassword'
			)

			// Переключение видимости пароля
			togglePassword.addEventListener('click', function () {
				togglePasswordVisibility(passwordInput, togglePassword)
			})

			toggleConfirmPassword.addEventListener('click', function () {
				togglePasswordVisibility(confirmPasswordInput, toggleConfirmPassword)
			})

			function togglePasswordVisibility(input, icon) {
				if (input.type === 'password') {
					input.type = 'text'
					icon.classList.replace('fa-eye', 'fa-eye-slash')
				} else {
					input.type = 'password'
					icon.classList.replace('fa-eye-slash', 'fa-eye')
				}
			}

			// Динамическая проверка при вводе
			confirmPasswordInput.addEventListener('input', function () {
				if (passwordInput.value !== confirmPasswordInput.value) {
					confirmPasswordInput.classList.add('error')
					confirmPasswordInput.classList.remove('success')
					errorMessage.style.display = 'block'
				} else {
					confirmPasswordInput.classList.remove('error')
					confirmPasswordInput.classList.add('success')
					errorMessage.style.display = 'none'
				}
			})

			// Проверка при отправке формы
			form.addEventListener('submit', function (event) {
				event.preventDefault()

				if (passwordInput.value !== confirmPasswordInput.value) {
					confirmPasswordInput.classList.add('error')
					errorMessage.style.display = 'block'
					return // Остановка отправки формы
				}

				// Если пароли совпадают, перенаправляем
				window.location.href = 'tour.html'
			})