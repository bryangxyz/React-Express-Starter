const express = require('express');

const app = express();

app.get('/api/players', (req, res) => {
    const players = [
        { id: 1, firstName: 'Kobe', lastName: 'Bryant'},
        { id: 2, firstName: 'James', lastName: 'Harden'},
        { id: 3, firstName: 'Chris', lastName: 'Paul'},
    ];
    res.json(players);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));