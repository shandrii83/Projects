document.addEventListener('DOMContentLoaded', function () {
	const burgerMenu = document.getElementById('burgerMenu');
	const navList = document.getElementById('navList');
	const loginLink = document.getElementById('loginLink');
	const loginOptions = document.getElementById('loginOptions');

	// Show login options on mouse hover
	loginLink.addEventListener('mouseenter', function () {
		loginOptions.classList.add('show');
	});

	// Hide login options when mouse leaves the login link or options
	loginLink.addEventListener('mouseleave', function () {
		loginOptions.classList.remove('show');
	});
	loginOptions.addEventListener('mouseenter', function () {
		loginOptions.classList.add('show');
	});
	loginOptions.addEventListener('mouseleave', function () {
		loginOptions.classList.remove('show');
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
