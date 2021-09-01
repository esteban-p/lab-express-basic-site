const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const port = 3000;

app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
})

app.get('/a', (req, res) => {
    res.sendFile(__dirname + '/views/person_a.html');
})

app.get('/b', (req, res) => {
    res.sendFile(__dirname + '/views/person_b.html');
})

app.get('/person_a_work', (req, res) => {
    res.sendFile(__dirname + '/views/person_a_work.html');
})
