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
    const user = await Users.create({
        name: 'Nancy', email: 'nancy@cb.lk'
    })

    console.log(user)
    console.log('========================')
    user.name = user.name.toUpperCase()
    await (util.promisify(setTimeout))(5000)
    console.log(user)
    console.log('========================')
    await user.save()
    console.log(user)

}

dbOps()