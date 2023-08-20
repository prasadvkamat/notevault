const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "prasadkamat9844"

// Create a user using POST "/api/auth", doesn't require authentication
router.post('/',
    //setting some validation rules using the express-validator in form of array
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', "Enter a valid Email").isEmail(),
        body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
    ], async (req, res) => {
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
    const secretpass = await bcrypt.hash(req.body.password,salt)


        //if the user is unique and new and dosent have any problesm above then we will start with the making of new user here
        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secretpass
            });
            const data = {
                user:{
                    id:user.id
                }
            }
            const auth_token = jwt.sign(data,JWT_SECRET)
            res.json({auth_token});
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

module.exports = router;
