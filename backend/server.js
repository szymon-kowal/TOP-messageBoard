const express = require('express');
const db = require('./db');
const path = require('path');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 8000;

server
	.route('/api')
	.get((_, res) => {
		return res.json(db);
	})
	.post((req, res) => {
		res.send('Request taken by API');
		db.push({ ...req.body, added: new Date() });
	});

server.use(express.static(path.join(__dirname, 'dist')));

server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
