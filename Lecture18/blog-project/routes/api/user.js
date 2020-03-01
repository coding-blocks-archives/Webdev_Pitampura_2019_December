const { Router } = require('express')
const {
    createUser,
    authUser,
    findUserByToken
} = require('../../controllers/users')

const route = Router()

// GET /api/user
route.get('/', async (req, res) => {
    let auth = req.headers['authorization']
    if (auth && auth.startsWith('Token ')) {
        let token = auth.split(' ')[1]
        let user = await findUserByToken(token)
        return res.send(user)
    } else {
        res.status(401).send({
            "errors":{
              "body": [
                "Authorization Token empty"
              ]
            }
          })
    }
    
})

module.exports = { route }