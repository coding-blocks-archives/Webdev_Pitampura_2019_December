const Sequelize = require('sequelize')
const util = require('util')

const db = new Sequelize({
    dialect: 'mysql',
    username: 'mytestuser',
    password: 'mytestpass',
    database: 'mytestdb',
})

const Users = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        unique: true
    }
})

async function dbOps() {
    await db.sync()
    const users = await Users.findAll({
        where: {
            [Sequelize.Op.or]: [
                {name: { [Sequelize.Op.like]: 'S%' }},
                {email: { [Sequelize.Op.like]: 'h%' }}
            ]
        }
    })
    for (let user of users) {
        console.log(user.name)
    }
}

dbOps()