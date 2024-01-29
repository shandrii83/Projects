document.addEventListener('DOMContentLoaded', function () {
	const burgerMenu = document.getElementById('burgerMenu');
	const navList = document.getElementById('navList');
	const loginLink = document.getElementById('loginLink');
	const loginOptions = document.getElementById('loginOptions');

	// Toggle login options when clicking the "Login" link
	loginLink.addEventListener('click', function (event) {
		event.preventDefault(); // Prevent the default link behavior
		loginOptions.classList.toggle('show');
	});

	// Close the navigation menu when clicking outside of it
	document.addEventListener('click', function (event) {
		if (!event.target.closest('.burger-menu') && !event.target.closest('.nav-list')) {
			navList.classList.remove('show');
			loginOptions.classList.remove('show'); // Close login options as well
		}
	});

	// Toggle the navigation menu when clicking the burger menu icon
	burgerMenu.addEventListener('click', function () {
		navList.classList.toggle('show');
		loginOptions.classList.remove('show');
	});
});
