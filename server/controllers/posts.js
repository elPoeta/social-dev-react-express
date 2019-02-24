const Posts = require('../models/Posts');
const Profile = require('../models/Profile');

module.exports = {
    createPost: async (req, res, next) => {
        const user = req.user._id;
        const { text, name, avatar } = req.body;
        const newPost = new Posts({
            text,
            name,
            avatar,
            user
        });
        try {
            const post = await newPost.save();
            res.json(post);
        } catch (error) {
            res.json({ post: 'No posts found' });
        }

    },
    getPosts: async (req, res, next) => {
        try {
            const posts = await Posts.find().sort({ date: -1 });
            res.json(posts);
        } catch (error) {
            res.status(404).json(error);
        }
    },
    getPostById: async (req, res, next) => {
        try {
            const post = await Posts.findById({ _id: req.params.id });
            if (!post) {
                return res.json({ post: 'Post not found' });
            }
            res.json(post);
        } catch (error) {
            res.json({ post: 'Post not found' });

        }
    },
    deletePost: async (req, res, next) => {
        try {
            const profile = await Profile.findOne({ user: req.user._id });
            const post = await Posts.findById({ _id: req.params._id });
            if (post.user.toString() !== req.params._id) {
                return res.status(401).json({ noAuthorized: 'User no authorized' });
            }
            await post.remove();
            res.json({ success: true });
        } catch (error) {
            res.json({ post: 'Post not found' });
        }
    },
    likePost: async (req, res, next) => {
        try {
            const profile = await Profile.findOne({ user: req.user._id });
            const post = await Posts.findById({ _id: req.params._id });
            if (post.likes.filter(like => like.user.toString() === req.user._id).length > 0) {
                return res.status(400).json({ alreadyLiked: 'User already liked this post' });
            }
            post.like = [...post.like, req.user._id]
            await post.save();
            res.json(post);
        } catch (error) {
            res.json({ post: 'Post not found' });
        }
    },
    unLikePost: async (req, res, next) => {
        try {
            const profile = await Profile.findOne({ user: req.user._id });
            const post = await Posts.findById({ _id: req.params._id });
            if (post.likes.filter(like => like.user.toString() === req.user._id).length === 0) {
                return res.status(400).json({ notLiked: 'User not liked this post' });
            }
            post.like = [...post.like.filter(like => like.user.toString() !== req.user._id)];
            await post.save();
            res.json(post);
        } catch (error) {
            res.json({ post: 'Post not found' });
        }
    }
}