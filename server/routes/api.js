const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

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

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
})

module.exports = router;