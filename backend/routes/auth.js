const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "prasadkamat9844"

// Create a user using POST "/api/auth", doesn't require authentication
router.post('/createuser',

    //setting some validation rules using the express-validator in form of array
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', "Enter a valid Email").isEmail(),
        body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
    ], async (req, res) => {
        let success = false
        const errors = validationResult(req);//used to store any error which have came from validation results into error 
        //if error are not empty then we will display the error 
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //a simple function to check if the user already exist with the same email into the database 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry the user with this email already exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secretpass = await bcrypt.hash(req.body.password, salt)


        //if the user is unique and new and dosent have any problesm above then we will start with the making of new user here
        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secretpass
            });
            const data = {
                user: {
                    id: user.id
                }
            }
            const a_token = jwt.sign(data, JWT_SECRET)
            success = true
            res.json({success, a_token });
        } catch (error) {
            //as we have mentioned every email must be unique in the models of the user this will help us to catch the error here
            if (error.code === 11000) {
                // Duplicate key error
                return res.status(400).json({ error: 'Email already exists' });
            }
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    });


//authentication of user using post request using email and password

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false
    //if there are initial errors we dont need to check them so direct catching error using validationresults
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true
        res.json({success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }
})

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router

