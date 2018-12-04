const express = require('express');
const mongoose = require('mongoose');

const db = 'mongodb://user-ramin:raminghaderi77@ds121861.mlab.com:21861/events-db'

mongoose.connect(db, error => {
    if (error) {
        console.error(error);
    } else {
        console.log('Connected to mongodb');
    }
})

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Ramin');
});

module.exports = router;