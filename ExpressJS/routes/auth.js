const express = require('express');
const router = express.Router();

const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



router.post('/login', async (req, res) => {
    //verify email then verify pass return response
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user)
            return res.send('Invalid Email..!!!!')

        const passVerification = await bcrypt.compare(req.body.password, user.password)
        if (!passVerification)
            return res.send('invalid password')

        const token = jwt.sign({ _id: user._id }, process.env.SECRET)
        user.password = "undefiend";
        res.json({
            body:{
                user: user,
                token: token
            }
        })
    } catch (error) {
        // Handle any errors that occur during the login process
        console.error(error);
        res.status(500).send('Server Error');
    }

})



module.exports = router;