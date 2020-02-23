const MongoClient = require('mongodb').MongoClient

const MONGO_URL = "mongodb://localhost:27017"

async function write () {
    const client = await MongoClient.connect(MONGO_URL)

    const blogDB = client.db('blog')
    const articles = blogDB.collection('articles')
    
    const rows = await articles.find({
        a: { $exists: true }
    }).toArray()
    console.log(rows)
}

write()