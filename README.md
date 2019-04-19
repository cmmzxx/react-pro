# PRO

```js
npm install
npm run start
```

配置webpack开发环境，热更新

链接mongoDB，熟悉mongoDB语法

mongoDB存储数据是类似json的结构

https://docs.mongodb.com/manual/tutorial/query-documents/

```js
  1.创建数据库
    use [db_name]
    因为该数据库没有数据，所以 show dbs 不会显示出这个数据库，写入数据之后可以看到
  2.删除数据库
    use [db_name]
    db.dropDatabase()
    记得切到别的db下，不然继续执行插入数据的操作会重新创建一个数据库
  3.创建集合
    db.createCollection(name, options)

    name是集合的名字;

    options对象可选字段{
      capped:是否创建固定集合,
      autoIndexId:是否自动在_id字段创建索引,
      size:为固定集合指定最大量,
      max:包含文档最大数量
    }

    db.[collection_name].insert({a:1})
    插入操作会自动创建一个collection
  4.删除集合
    db.[collection_name].drop()
  5.向集合中插入文档
    db.[collection_name].insert(document)数组或对象
    db.[collection_name].insertOne(document)对象
    db.[collection_name].insertMany(document)数组
    .save()指定_id时，更新文档，否则与insert()方法类似
  6.更新文档
    db.[collection_name].update(
      <query>,查询条件
      <update>,update的对象和一些更新的操作符
      {
        upsert: <boolean>,如果不存在，是否将查询条件和update数据当作新数据插入
        multi: <boolean>,默认是false,只更新找到的第一条记录
        writeConcern: <document>抛出异常的级别
      }
    )
  7.删除文档
    db.[collection_name].deleteOne()
    db.[collection_name].deleteMany()
  8.查找文档
    找到所有集合下，status为A或者D的文档
    db.[collection_name].find()
```

安装antd-mobile，配置按需加载，查看官网https://mobile.ant.design/docs/react/introduce-cn
