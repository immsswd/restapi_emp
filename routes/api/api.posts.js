// routes
const express = require('express');
const router = express.Router();
// model.posts
const Posts = require('../../models/model.posts');

// @routes GET api/post
// desc: GET all post
router.get('/', async (req, res, next) => {

    try {
        let post = await Posts.find();
        if (!post) throw Error('Items not found');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
    next();
});

// @routes GET api/post/:id
// desc: GET a post
router.get('/:id', async (req, res, next) => {
    try {
        let post = await Posts.findById(req.params.id);
        if (!post) throw Error('Items not found');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
    next();
});

// @routes for POST api/post
// desc: create a post
router.post('/', async (req, res, next) => {
    let newPost = new Posts(req.body);
    try {
        let post = await newPost.save();
        if (!post) throw Error('something wrong');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
    next();
});

// @routes for DELETE /api/post/:id
// desc: delete a post
router.delete('/:id', async (req, res, next) => {
    try {
        let post = await Posts.findByIdAndDelete(req.params.id);
        if (!post) throw Error('nothing data was delted');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err })
    }
    next();
});

// @routes for UPDATE /api/post/:id
// desc: UPDATE/PATCH a post
router.patch('/:id', async (req, res) => {
    try {
        let post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if (!post) throw Error('Something is wrong');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

module.exports = router;