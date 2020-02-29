const { Articles } = require('../data/db')

async function createArticle(article) {
    if (!article.title) {
        return new Error('title missing')
    }
    if (!article.body) {
        return new Error('body missing')
    }

    await Articles.create({
        title: article.title,
        //...other fields
    })
}

module.exports = {
    createArticle
}