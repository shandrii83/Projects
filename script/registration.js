document.addEventListener('DOMContentLoaded', function () {
	const burgerMenu = document.getElementById('burgerMenu');
	const navList = document.getElementById('navList');
	const loginLink = document.getElementById('loginLink');
	const loginOptions = document.getElementById('loginOptions');
	const registrationForm = document.getElementById('registrationForm');
	const errorMessage = document.getElementById('errorMessage');

	// Toggle login options when clicking the "Login" link
	loginLink.addEventListener('click', function (event) {
		event.preventDefault(); // Prevent the default link behavior
		loginOptions.classList.toggle('show');
	});

	// Show registration form when clicking the "Client Login" link
	const clientLoginLink = document.querySelector('.client-login');
	clientLoginLink.addEventListener('click', function (event) {
		event.preventDefault();
		registrationForm.classList.add('show');
		loginOptions.classList.remove('show');
	});

	// Close the registration form when clicking outside of it
	document.addEventListener('click', function (event) {
		if (!event.target.closest('.registration-form') && !event.target.closest('.burger-menu') && !event.target.closest('.nav-list')) {
			registrationForm.classList.remove('show');
			loginOptions.classList.remove('show'); // Close login options as well
		}
	});

	// Toggle the navigation menu when clicking the burger menu icon
	burgerMenu.addEventListener('click', function () {
		navList.classList.toggle('show');
		loginOptions.classList.remove('show');
	});

	// Form validation
	function validateForm() {
		const firstName = document.getElementById('firstName').value;
		const lastName = document.getElementById('lastName').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		if (password !== confirmPassword) {
			errorMessage.textContent = "Passwords do not match!";
			return false;
		}

		// You can add more validation rules here

		return true;
	}
});
