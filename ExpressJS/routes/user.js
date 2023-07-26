const express = require('express')
const Joi = require('@hapi/joi')
const router = express.Router();
const UserModel = require('../models/User')
const bCrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verifyToken = require('./verifyjwt')

//Routes in EXPRESS JS
//get, post, delete, patch(for update)
router.use(express.json());


router.get('/home', (req, res) => {
    console.log('Home GET API');
    res.json({
        body: {
            message: 'Home GET API'
        }
    })
})
router.get('/token', (req, res) => {
    console.log('Token GET API');
    const token = jwt.sign({ _id: 'ds_123123456' }, process.env.SECRET)
    res.send(token);
})



router.post('/add', verifyToken, async (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).email().required(),
        password: Joi.string().min(6).required(),
    });
    try {
        // Validate the request body against the defined Joi schema
        const { error } = schema.validate(req.body);
        if (error) {
            // If validation fails, send an error response with the details
            return res.status(400).send(error.details[0].message);
        }
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: await bCrypt.hash(req.body.password, await bCrypt.genSalt(10)),
        });

        // Save the user to the database
        const savedUser = await user.save();

        res.send(savedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.get('/all', verifyToken, async (req, res) => {
    const users = await UserModel.find();
    console.log('All GET API');
    try {
        res.send(users);
    } catch (err) {
        res.send(err);
    }
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    console.log('User GET API');
    try {
        res.send(user);
    } catch (err) {
        res.send(err);
    }
})

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete({ _id: id });
    console.log('delete User API');
    try {
        res.send(deletedUser);
    } catch (err) {
        res.send(err);
    }
})

router.patch('/user/:id', async (req, res) => {
    const id = req.params.id;

    //id of record, New data value and true for returning ;latest data
    const updateUser = await UserModel.findByIdAndUpdate(
        { _id: id },
        { $set: req.body },
        { new: true }
    );
    console.log('Update User API');
    try {
        res.send(updateUser);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router