const { verifyToken } = require('../helpers/jwt');
const {User} = require('../models')
async function authentication(req, res, next) {
    try {
        let token = req.headers.authorization

        if (!token) throw {name : "InvalidToken"}

        if(token.slice(0, 7)!== 'Bearer ') throw {name : "InvalidToken"};

        token = token.slice(7)

        const payload = verifyToken(token)
        

        const user = await User.findByPk(payload.id)

        if (!user) throw { name : "InvalidToken"}

        req.user = {
            id : user.id,
            email : user.email,
        }
        next()
        
    } catch (error) {
        // console.log(error);
        next(error)
    }
}

module.exports = {authentication}