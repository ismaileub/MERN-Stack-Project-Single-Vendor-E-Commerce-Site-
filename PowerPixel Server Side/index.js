const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my server');
});

app.get('/data', (req, res) => {
    res.send('More data coming soon.....');
});

app.listen(port, () => {
    console.log(`My first server running on port: ${port}`);
});