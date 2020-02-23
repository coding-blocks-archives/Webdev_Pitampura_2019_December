const MongoClient = require('mongodb').MongoClient

const MONGO_URL = "mongodb://localhost:27017"

async function write () {
    const client = await MongoClient.connect(MONGO_URL)

    const blogDB = client.db('blog')
    const articles = blogDB.collection('articles')
    
    const result = await articles.insertOne({
        a: 10
    })
    console.log(result.ops)
}

write()