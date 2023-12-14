const { comparePassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");
const { User } = require("../models");
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
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
           next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            // console.log(req.body);
            if(!email || !password) throw ({name : 'EmailorPasswordRequired'})

            const user = await User.findOne({email: email})
            if(!user) throw ({name : 'InvalidAccount'})

            const isMatch = comparePassword(password, user.password)
            if(!isMatch) throw ({name : 'InvalidAccount'})

            const access_token = getToken({id: user.id})
            res.status(200).json({access_token})
        } catch (error) {
            next(error);
        }
    }

    static async loginGoogle(req, res, next){
        try {
            const {google_token} = req.body
            console.log(req.body);
            const ticket = await client.verifyIdToken({
                idToken : google_token,
                audience : process.env.GOOGLE_CLIENT_ID
            })

            const payload = ticket.getPayload()
            console.log(payload);

            const [user, created] = await User.findOrCreate({
                where : { email : payload.email},
                defaults : {
                    fullName : payload.name,
                    email : payload.email,
                    password : Math.random().toString(),
                    address : payload.given_name,
                    phoneNumber : payload.family_name
                }
            })

            const access_token = getToken({id : user.id})
            res.status(created ? 201 : 200).json({
                "message": 'Login Success',
                "access_token" : access_token
            })
        } catch (error) {
            next(error);
        }
    }
}