const { Articles, Users } = require('../data/db')
const { slugify } = require('../utils/string')

async function getAllArticles() {
    const articles = await Articles.findAll({
        attributes: [
            'slug', 'title', 'description',
            'body', 'createdAt', 'updatedAt'
        ],
        include: [{
            attributes: ['username', 'bio', 'image'],
            model: Users,
            as: 'author'
        }]
    })

    return ({
        articles,
        articlesCount: articles.length
    })
}

async function createArticle(
    title,
    description,
    body,
    authorUsername
) {
    if (!title) {
        return new Error('title missing')
    }
    if (!body) {
        return new Error('body missing')
    }

    const newArticle = await Articles.create({
        slug: slugify(title),
        title,
        description,
        body,
        authorUsername
    })

    const article = await Articles.findOne({
        attributes: [
            'slug', 'title', 'description',
            'body', 'createdAt', 'updatedAt'
        ],
        where: {slug: newArticle.slug},
        include: [{
            attributes: ['username', 'bio', 'image'],
            model: Users,
            as: 'author'
        }]
    })
    return article
}

module.exports = {
    getAllArticles,
    createArticle
}