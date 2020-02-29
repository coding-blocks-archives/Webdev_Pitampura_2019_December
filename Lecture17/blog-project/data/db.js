const Sequelize = require('sequelize')

const db = new Sequelize({
    // db config
})


const Users = db.define('user', {
    // config here
})

const Articles = db.define('user', {
    // config here
})

module.exports = { 
    db,
    Users,
    Articles
}