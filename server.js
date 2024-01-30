const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/register', (req, res) => {
	// Your registration logic here (replace with actual registration code)
	console.log('Received data:', req.body);
	res.json({ message: 'Registration successful' });
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Сервер запущен нa порту ${PORT}`);
});
