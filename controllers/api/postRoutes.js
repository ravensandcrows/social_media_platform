const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Comment.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }]
        });
        if (!postData) {
            res.status(404).json({ message: 'No comment found'})
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// LIKE button
// app.post('/api/upvotes/:review_id', (req, res) => {
//     if (req.body && req.body.upvote && req.params.review_id) {
//       console.info(`${req.method} request received to upvote a review`);
//       const reviewId = req.params.review_id;
//       for (let i = 0; i < reviews.length; i++) {
//         const currentReview = reviews[i];
//         if (currentReview.review_id === reviewId) {
//           currentReview.upvotes += 1;
//           res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
//           return;
//         }
//       }
//     } else {
//       res.status(500).json("Provide a req.body or review ID");
//     }
//   });

module.exports = router;