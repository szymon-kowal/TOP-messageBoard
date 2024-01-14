const express = require('express');
const db = require('./db');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 8000;

server
	.route('/api')
	.get((req, res) => {
		res.send(db);
	})
	.post((req, res) => {
		res.send('Request taken by API');
	});

server.use(express.static(path.join(__dirname, 'dist')));

server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
