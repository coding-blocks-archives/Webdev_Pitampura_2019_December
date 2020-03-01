const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function genRandomString(length) {
    let buff = []
    while (buff.length < length) {
        const charCode = parseInt(Math.random() * (61))
        buff.push(ALPHABET.charAt(charCode))
    }
    return buff.join('')
}

module.exports = {
    genRandomString
}