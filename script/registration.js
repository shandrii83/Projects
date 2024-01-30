document.getElementById('registrationForm').addEventListener('submit', function (event) {
	event.preventDefault();

	const formData = {
		username: document.getElementById('username').value,
		email: document.getElementById('email').value,
		password: document.getElementById('password').value
	};

	fetch('/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Response not successful (Status: ${response.status})`);
			}
		})
		.then(data => {
			document.getElementById('message').innerHTML = data.message;
		})
		.catch(error => {
			console.error('Error:', error);
			document.getElementById('message').innerHTML = 'An error occurred while processing the request.';
		});
});
