const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById,
    deletePost, likePost, unLikePost,
    createComment, deleteComment } = require('../../controllers/posts');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const validatePost = require('../../utils/post');
const validateComment = require('../../utils/comment');


router.post('/', validatePost, requireAuth, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.delete('/:id', requireAuth, deletePost);
router.post('/like/:id', requireAuth, likePost);
router.post('/unlike/:id', requireAuth, unLikePost);
router.post('/comment/:id', validateComment, requireAuth, createComment);
router.delete('/comment/:id/:comment_id', requireAuth, deleteComment);

module.exports = router;