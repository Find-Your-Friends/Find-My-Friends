const { isAuthorized } = require("../utils/auth-utils");
const Post = require("../db/models/Post");

exports.updateActiveStatus = async (req, res) => {
  try {
    const updatedPosts = await Post.updateActiveStatus();
    res.status(200).json({ message: "Active status updated", updatedPosts });
  } catch (error) {
    console.error("Error updating active status:", error);
    res.status(500).json({ error: "Failed to update active status" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const {
      user_id,
      picture,
      username,
      location,
      time,
      date,
      group_size,
      title,
      description,
      gender_preference,
      active,
    } = req.body;

    const post = await Post.create(
      user_id,
      picture,
      username,
      location,
      time,
      date,
      group_size,
      title,
      description,
      gender_preference,
      active
    );
    res.send(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};

exports.deletePost = async (req, res) => {
  const postId = req.params.params;
  const userId = req.user.id;

  try {
    const post = await Post.findByUser(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.user_id !== userId) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this post" });
    }

    await Post.deletePost(postId);
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
};
