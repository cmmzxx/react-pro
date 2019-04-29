# PRO

```js
npm install
npm run start
```

配置webpack开发环境，热更新，sass-loader，babel-loader，eslint等等

链接mongoDB，熟悉mongoDB语法，有点多，大致看了增删改查，用的时候再查

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

### 熟悉react

  1. props的值都是未经转义的，即`\\`传递给子组件，接收到的也是`\\`
  2. ReactDom.createPortal(el,node)，el是ReactElement，node是dom节点，el在dom树上的表现为被挂载在node下，作为node的第一个子元素；在react树上的表现为挂载在当前组件下，在portal上定义的事件冒泡的顺序为portal-父组件-...-body
  3. 组件中this丢失问题：1、在`constructor`中绑定this；2、绑定事件的时候使用箭头函数，比如：`onClick = {(e) => this.handleClick()}`；3、使用createReactClass; 4、使用babel插件`@babel/plugin-proposal-class-properties`，写法比如`handleClick = () => {}`
  4. `defaultProps`，默认props，未从父组件传值时使用的默认值；函数组件或者class组件，`Component.defaultProps = {}`；createReactClass创建的组件则需要定义`getDefaultProps()`函数，该函数返回一个对象，对象为默认的props对象
  5. 从`create-react-class`模块引入`createReactClass`，其接收一个对象作为参数，`let Component = createReactClass({render: function(){}})`。初始化state则需要定义一个`getInitialState()`函数；this自动绑定到当前组件上

安装antd-mobile，配置按需加载，查看官网https://mobile.ant.design/docs/react/introduce-cn，配置css-loader

安装redux，熟悉一下