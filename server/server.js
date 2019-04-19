const express = require('express')
const port = 9000
const app = express()

// 链接mongodb
const MongoClient = require('mongodb').MongoClient;
const DB_URL = 'mongodb://127.0.0.1:27017'
const dbName = 'myReactPro'
MongoClient.connect(DB_URL, function (err, client) {
  console.log('Connected successfully to DB server')
  // 数据库的名字
  const db = client.db(dbName)
  // 表(集合)的名字
  db.collection('inserts').insertOne({a: 1}, function (err, r) {
    db.collection('inserts').insertMany([{b:2}, {c:3}], function (err, r) {
      client.close()
    })
  })
})


app.get('/', (req, res) => {
  res.send('hello node app server')
})

app.listen(port, function () {
  console.log(`listen port at ${port}`)
})