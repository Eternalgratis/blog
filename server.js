const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

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

app.listen(5000);