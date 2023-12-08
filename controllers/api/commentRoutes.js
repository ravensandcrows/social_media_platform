const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            user_id: req.session.user_id,
            post_id: req.body.post_id,
            description: req.body.description,
        });
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
});

//this goes in the dashboard
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({});
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
