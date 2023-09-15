import Post from "../Models/PostModel.js";

export const addPost = async (req, res) => {
  const { body } = req;
  try {
    const post = await Post.create(body);
    res
      .status(201)
      .json({ message: "Post created successfully", data: post });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const getPosts = async (req, res) => {
  const cat = req.query.cat;
  try {
    let posts;
    if (cat) {
      posts = await Post.find({category: {$in: [cat]}});
    } else {
      posts = await  Post.find({});
    }
    
    res.status(200).json({ message: "Successful get request", data: posts });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const getPost = async (req, res) => {
  const { post_id } = req.params;
  try {
    const post = await Post.findById(post_id);
    res
      .status(201)
      .json({
        message: "Successful get request for single Post",
        data: post,
      });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { post_id } = req.params;
  const { body } = req;
  try {
    const post = await Post.findByIdAndUpdate(post_id, body, {new: true});
    res.status(201).json({
      message: "Successful update",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  const { post_id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(post_id);
    if (!post) {
      res.status(400).json({
        message: `Post of id: ${post_id} not found`,
      });
    } else {
      res.status(201).json({
        message: "Post deleted successfully",
        data: post,
      });
    }
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};
