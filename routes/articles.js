const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.get('/id', (req, res) => {

})

router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.decription,
        markdown: req.body.markdown
    })
    try {
       article =  await article.save()
       res.redirect(`/article/${article.id}`)
    } catch (e) {
        res.render('article/new', {article: article})
    }
    
})

module.exports = router;