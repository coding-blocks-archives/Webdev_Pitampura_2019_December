const { Users } = require('../data/db')
const { genRandomString } = require('../utils/random')

async function createUser(username, email, password, bio, image) {
  // TODO: validate username, email, password not null
  const user = await Users.create({
    username,
    email,
    password,
    token: genRandomString(32),
    bio,
    image
  })

  return user
}

async function authUser(username, password) {
    const user = await Users.findOne({
        where: { username }
    })
    if (!user) {
        return { body: [ 'No user found with that username' ]}
    }
    if (user.password != password) {
        return { body: [ 'Password does not match' ]}
    }
    return user
}

async function findUserByToken(token) {
    const user = await Users.findOne({
        where: { token }
    })

    if (!user) {
        return { body: [ 'Invalid token' ]}
    }

    return user
}

module.exports = {
    createUser,
    authUser,
    findUserByToken
}