const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, deletePost, likePost, unLikePost } = require('../../controllers/posts');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/', requireAuth, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.delete('/:id', requireAuth, deletePost);
router.post('/like/:id', requireAuth, likePost);
router.post('/unlike/:id', requireAuth, unLikePost);

module.exports = router;