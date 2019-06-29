const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
//const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../auth');

// Load input validations
const validateRegisterInput = require('../../');
const validateLoginInput = require('../../');


// loading User model
const User = require('../../models/user');


// I dont have to include the path /api/users as I already did that in server.js . However in the browser OR postman GET request I have to put - http://localhost:5000/api/users/test

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "user works"}));

//Send data to a post request (which will ultimately be through a form in React, but for now will be checking with Postman (using "x-www-form-urlencoded" in the body)) - however in either way I need to access req.body. And for registration, first I check if there exists a user with the same email in the database.

router.post('/register', (req, res) => {
    /* Before I do anything in the server-side with the data input by user, I pass the data to the validateRegisterInput() function. The data (i.e. req.body) includes all the information that the user puts in while registering.
    And get the function's return values assigned to const { errors, isValid }.
    So this is an exmple of Destructuring, where I am pulling the return values of a function and assigning it to two variables within curly braces */
    const { errors, isValid } = validateRegisterInput(req.body);

    // If the input is not valid res.send the entire errors object.
    if(!isValid) {
        return res.status(400).json(errors);
    }

    // starting with this file (user.js) - any routes thats going to take in req.body we are going to firsts add the above 2 checks at the beginning.

    User.findOne({email: req.body.email}).then(user => {
    if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
    } else {
       
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            
            password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(user => console.log(err))
            });
        });
     }
  })
})

// Now implement the same routes for logging in to protected routes where I have to match email / password

router.post('/login', (req, res) => {

    /* I pass the data to the validateRegisterInput() function. The data (i.e. req.body) includes all the information that the user puts in while registering.
    And get the function's return values assigned to const { errors, isValid }. */
    const { errors, isValid } = validateLoginInput(req.body);
    // Check Validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Check if the user email exists at all in database
    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json({email: 'User not found'});
        }

        //Compare password hash saved in database with the password provided in the req.body
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {

                // if User is matched, then create JWT Payload
                const payload = { id: user.id, name: user.name, avatar: user.avatar };

                // signed JWT token to be sent to server
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: 'Bearer ' + token
                      });
                    }
                  );
                } else {
                errors.password = 'Password Incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
// function to authenticate request to a protected route (i.e. which requires login credentials) - http://www.passportjs.org/docs/authenticate/ - disabling session persistance so credentials need to be supplied with each request
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
  );

module.exports = router;

