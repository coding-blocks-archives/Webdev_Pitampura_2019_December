const { Router } = require('express')

const route = Router()

// GET /api/profiles/:username
route.get('/:username', (req, res) => {
    res.send('TODO: profile page of ' + req.params.username)
}) 

module.exports = { route }