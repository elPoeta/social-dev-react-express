const Posts = require('../models/Posts');
const Profile = require('../models/Profile');

module.exports = {
    createPost: async (req, res, next) => {
        const user = req.user.id;
        const { title, body, name, avatar } = req.body;
        const newPost = new Posts({
            title,
            body,
            name,
            avatar,
            user
        });
        try {
            const post = await newPost.save();
            res.json(post);
        } catch (error) {
            res.json({ postNotFound: 'No posts found' });
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
            res.json({ postNotFound: 'Post not found' });

        }
    },
    deletePost: async (req, res, next) => {
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (!profile) {
                return res.json('Post not found');
            }
            const post = await Posts.findById({ _id: req.params.id });
            if (post.user.toString() !== req.params.id) {
                return res.status(401).json({ noAuthorized: 'User no authorized' });
            }
            await post.remove();
            res.json({ success: true });
        } catch (error) {
            res.json({ postNotFound: 'Post not found' });
        }
    },
    likePost: async (req, res, next) => {
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (!profile) {
                return res.json('Profile not found');
            }
            const post = await Posts.findById({ _id: req.params.id });
            if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                return res.status(400).json({ alreadyLiked: 'User already liked this post' });
            }
            post.likes = [...post.likes, { user: req.user.id }];

            await post.save();
            res.json(post);
        } catch (error) {
            res.json({ postNotFound: 'Post not found' });
        }
    },
    unLikePost: async (req, res, next) => {

        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (!profile) {
                return res.json('Profile not found');
            }
            const post = await Posts.findById({ _id: req.params.id });

            if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {

                return res.status(400).json({ notLiked: 'User not liked this post' });
            }

            post.likes = [...post.likes.filter(like => like.user.toString() !== req.user.id)];

            await post.save();

            res.json(post);
        } catch (error) {
            res.json({ postNotFound: 'Post not found' });
        }
    },
    createComment: async (req, res, next) => {
        const { body, name, avatar } = req.body;
        const user = req.user.id;
        try {
            const post = await Posts.findById({ _id: req.params.id });
            if (!post) {
                return res.json({ postNotFound: 'Post not found' });
            }
            const newComment = { body, name, avatar, user };
            post.comments = [...post.comments, newComment];
            await post.save();
            res.json(post);

        } catch (error) {
            res.json({ postNotFound: 'Post not found' });
        }
    },
    deleteComment: async (req, res, next) => {
        try {
            const post = await Posts.findById({ _id: req.params.id });
            if (!post) {
                return res.json({ postNotFound: 'Post not found' });
            }
            if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
                return res.status(404).json({ commentNotExist: 'Comment not exist' });
            }
            post.comments = [...post.comments.filter(comment => comment._id.toString() !== req.params.comment_id)];
            await post.save();
            res.json(post);

        } catch (error) {
            res.json({ postNotFound: 'Post not found' });
        }
    }
}