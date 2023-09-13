import Post from "../Models/PostModel.js";

export const addPost = async (req, res) => {
  const { body } = req;
  try {
    const cat = await Post.create(body);
    res
      .status(201)
      .json({ message: "category created successfully", data: cat });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    const cats = await Post.find({});
    res.status(201).json({ message: "Successful get request", data: cats });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const getPost = async (req, res) => {
  const { cat_id } = req.params;
  try {
    const cat = await Post.findById(cat_id);
    res
      .status(201)
      .json({
        message: "Successful get request for single category",
        data: cat,
      });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { cat_id } = req.params;
  const { body } = req;
  try {
    const cat = await Post.findByIdAndUpdate(cat_id, body);
    res.status(201).json({
      message: "Successful update",
      data: cat,
    });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  const { cat_id } = req.params;
  try {
    const cat = await Post.findByIdAndDelete(cat_id);
    if (!cat) {
      res.status(400).json({
        message: `Category of id: ${cat_id} not found`,
      });
    } else {
      res.status(201).json({
        message: "Category delete successfully",
        data: cat,
      });
    }
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};
