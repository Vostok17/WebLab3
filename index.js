'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.listen(5500, () => {
    console.log('API app started');
});
