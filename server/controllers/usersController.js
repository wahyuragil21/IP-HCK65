const { comparePassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");
const { User } = require("../models");
module.exports = class usersController {

    static async register(req, res, next) {
        try {
            const newUser = await User.create({ ...req.body })
            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                email: newUser.email,
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            if(!email || !password) throw ({name : 'EmailorPasswordRequired'})

            const user = await User.findOne({email: email})
            if(!user) throw ({name : 'InvalidAccount'})

            const isMatch = comparePassword(password, user.password)
            if(!isMatch) throw ({name : 'InvalidAccount'})

            const access_token = getToken({id: user.id})
            res.status(200).json({access_token})
        } catch (error) {
            console.log(error);
        }
    }
}