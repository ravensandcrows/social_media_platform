const router = require('express').Router();
const { Post, User } = require('../../models');
const multer = require('multer')

//multer setup
const storage = multer.memoryStorage();
const upload = multer({
    storage,
});

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const fileBuffer = req.file.buffer;
        const { title, description, date, location } = req.body;
        const postData = await Post.create({ title, description, date, location, image: fileBuffer, user_id: req.session.user_id });
        res.status(200).json('done');
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }]
        });
        if (!postData) {
            res.status(404).json({ message: 'No comment found' })
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.update(
            req.body,
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
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