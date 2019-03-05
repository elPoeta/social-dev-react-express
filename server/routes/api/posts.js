const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  getPostByUserId,
  getPostByPostIdByUserId,
  deletePost,
  likePost,
  unLikePost,
  createComment,
  deleteComment
} = require("../../controllers/posts");
const passport = require("passport");
require("../../services/passport");
const requireAuth = passport.authenticate("jwt", { session: false });
const validatePost = require("../../utils/post");
const validateComment = require("../../utils/comment");

router.post("/", validatePost, requireAuth, createPost);
router.get("/", getPosts);
router.get("/edit/:id/:user_id", requireAuth, getPostByPostIdByUserId);
router.get("/:id", getPostById);
router.get("/user/:user_id", requireAuth, getPostByUserId);
router.delete("/:id", requireAuth, deletePost);
router.post("/like/:id", requireAuth, likePost);
router.post("/unlike/:id", requireAuth, unLikePost);
router.post("/comment/:id", validateComment, requireAuth, createComment);
router.delete("/comment/:id/:comment_id", requireAuth, deleteComment);

module.exports = router;
