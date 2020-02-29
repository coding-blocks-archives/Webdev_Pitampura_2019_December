const Seqeulize = require('sequelize')

const db = new Seqeulize({
    dialect: 'mysql',
    database: 'webdevsampledb',
    username: 'webdevuser',
    password: 'webdevpass'
})

const Users = db.define('user', {
    username: {
        type: Seqeulize.STRING(30),
        primaryKey: true
    },
    email: {
        type: Seqeulize.STRING(75),
        allowNull: false,
        unique: true
    },
    name: {
        type: Seqeulize.STRING
    },
    password: {
        type: Seqeulize.STRING,
        allowNull: false
    }
})

module.exports = {
    db, Users
}