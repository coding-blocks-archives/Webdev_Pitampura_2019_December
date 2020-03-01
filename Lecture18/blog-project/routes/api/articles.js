const { Router } = require('express')
const { userFromToken } = require('../../middlewares/auth')
const { getAllArticles, createArticle } = require('../../controllers/articles')
const { findUserByToken } = require('../../controllers/users')
const route = Router()

// GET /api/articles
route.get('/', async (req, res) => {
  const articles = await getAllArticles()

  res.send(articles)
})

// POST /api/articles
route.post('/', userFromToken, async (req, res) => {
  
  let a = req.body.article
  let article = await createArticle(
    a.title,
    a.description,
    a.body,
    req.user.username
  )
  res.send(article)
})

module.exports = { route }
