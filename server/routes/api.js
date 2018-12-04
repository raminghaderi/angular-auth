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
});

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
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if(error) {
            console.error(error);
        } else if(!user) {
            res.status(401).send('Invalid email');
        } else if(userData.password !== user.password) {
            res.status(401).send('Invalid password');
        } else {
            res.status(200).send(user);
        }
    });
});

router.get('/events', (req, res) => {
    let events = [
        {
          "_id": "1",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ];

    res.json(events);
});

router.get('/special', (req, res) => {
    let specialEvents = [
        {
          "_id": "1",
          "name": "Auto Expo Special",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo Special",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo Special",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo Special",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo Special",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo Special",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ];

    res.json(specialEvents);
});

module.exports = router;