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

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.destroy(
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
module.exports = router;