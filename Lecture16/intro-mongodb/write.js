const MongoClient = require('mongodb').MongoClient

const MONGO_URL = "mongodb://localhost:27017"
MongoClient.connect(MONGO_URL, (err, client) => {

    const blogDB = client.db('blog')
    const articles = blogDB.collection('articles')

    articles.insertOne({
        title: 'Lorem Ipsum is therefore always free ',
        body: 'ney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a',
        subtitle: 'l text, and a search fo',
        category: 'humour'
    }, (err, result) => {
        if (err) throw err

        console.log(result.ops)
    })
})