const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/loginAuth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await Post.findAll({
        include: [User, {model: Comment, include: [User]}]
        });
        
        // this maps the user data to remove Sequelize-specific methods and get a clean JS object
        const posts = userData.map((post) => post.get({ plain: true }));
        console.log(posts);
        // renders dashboard
        res.render('posts', {
            layout: "dashboard",
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err.message);
        res.status(400).end();
    }
});

router.get('/new-post', async (req, res) => {
    res.render('newPost', {
        layout: "dashboard",
        logged_in: req.session.logged_in,
    });
});

module.exports = router;