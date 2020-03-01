const { Router } = require('express')
const {
    createUser,
    authUser
} = require('../../controllers/users')

const route = Router()

// POST /api/users
route.post('/', async (req, res) => {
    let u = req.body.user
    const user = await createUser(
        u.username,
        u.email,
        u.password,
        u.bio,
        u.image
    )

    res.send(user)

})

module.exports = { route }