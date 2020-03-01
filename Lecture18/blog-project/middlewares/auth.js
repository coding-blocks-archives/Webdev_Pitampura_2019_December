const {findUserByToken} = require('../controllers/users')

async function userFromToken(req, res, next) {
    
    let auth = req.headers['authorization']
    
    if (auth && auth.startsWith('Token ')) {
        let token = auth.split(' ')[1]
        let user = await findUserByToken(token)
        if (user) {
            req.user = user 
            return next()
        }
    }

    res.status(401).send({
        errors: {
            body: ['Invalid authorization code']
        }
    })
}

module.exports = { userFromToken }