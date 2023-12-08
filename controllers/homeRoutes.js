const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/loginAuth');

router.get('/', async (req, res) => {
    try {
        //renders dashboard
        res.render('homepage', {
            // posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(400).end();
    }
});

router.get('/login', async (req, res) => {
    // if user is loggedin, it redirects them to home page
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    // otherwise it redirects to login page
    res.render('login');
});

router.get('/logout', async (req, res) => {
    // if user is loggedin, it redirects them to home page
    if (!req.session.logged_in) {
        res.render('/')
    }
    console.log('it works')
});

module.exports = router;