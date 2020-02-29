const { Router } = require('express')

const articlesRoute = require('./articles').route
const profilesRoute = require('./profiles').route

const route = Router()

route.use('/articles', articlesRoute)
route.use('/profiles', profilesRoute)


module.exports = { route }