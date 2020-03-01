const { Router } = require('express')
const { userFromToken } = require('../../middlewares/auth')
const {
    createUser,
    authUser,
    findUserByToken
} = require('../../controllers/users')

const route = Router()

// GET /api/user
route.get('/', userFromToken, async (req, res) => {
  return res.send(req.user)
})

module.exports = { route }