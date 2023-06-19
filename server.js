const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();
const mongoDB = 'mongodb://127.0.0.1'

mongoose.connect(mongoDB).then(() => {
    console.log('connection successful')
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description',
        btn1: 'Read More',
        btn2: 'Edit',
        btn3: 'Delete'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2',
        btn1: 'Read More',
        btn2: 'Edit',
        btn3: 'Delete'
    }]
    res.render('articles/index', { articles: articles } )
})

app.use('/articles', articleRouter);

app.listen(5000);