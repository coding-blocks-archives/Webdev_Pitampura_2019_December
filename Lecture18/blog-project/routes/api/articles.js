const { Router } = require('express')
const { createArticle } = require('../../controllers/articles')

const route = Router()

// GET /api/articles
route.get('/', (req, res) => {
    res.send('TODO: list of all articles')
}) 

// POST /api/articles 
route.post('/', (req, res) => {
    res.send('TODO: article has been added')

    createArticle({
        title: req.body.title,
        // ... other fields
    })
})

module.exports = { route }