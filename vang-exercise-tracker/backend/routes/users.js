const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {           //get request
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res ) => {      //post request
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()                              //save method
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;