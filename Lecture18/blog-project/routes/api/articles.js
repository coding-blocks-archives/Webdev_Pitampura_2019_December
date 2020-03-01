const { Router } = require('express')
const { getAllArticles, createArticle } = require('../../controllers/articles')
const { findUserByToken } = require('../../controllers/users')
const route = Router()

// GET /api/articles
route.get('/', async (req, res) => {
    const articles = await getAllArticles()

    res.send(articles)
}) 

// POST /api/articles 
route.post('/', async (req, res) => {

    let auth = req.headers['authorization']
    if (auth && auth.startsWith('Token ')) {
        let token = auth.split(' ')[1]
        let user = await findUserByToken(token)
        
        let a = req.body.article
        let article = await createArticle(
            a.title,
            a.description,
            a.body,
            user.username
        )
        res.send(article)

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