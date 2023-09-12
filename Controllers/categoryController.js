import Category from '../Models/categoriesModel.js';

export const addCategory = async (req, res) => {
  const { body } = req;
  try {
    const cat = await Category.create(body);
    res
      .status(201)
      .json({ message: "category created successfully", data: cat });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message
    })
  }
}

export const getCategories = async (req, res) => {
  
  try {
    const cats = await Category.find({});
    res
      .status(201)
      .json({ message: "Successful get request", data: cats });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

export const getCategory = async (req, res) => {
  const { cat_id } = req.params;
  try {
    const cat = await Category.findById(cat_id)
    res.status(201).json({ message: "Successful get request for single category", data: cat });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};


export const updateCategory = async (req, res) => {
  const { cat_id } = req.params;
  const { body } = req;
  try {
    const cat = await Category.findByIdAndUpdate(cat_id, body);
    res
      .status(201)
      .json({
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


export const deleteCategory = async (req, res) => {
  const { cat_id } = req.params;
  try {
    const cat = await Category.findByIdAndDelete(cat_id);
    res
      .status(201)
      .json({
        message: "Category delete successfully",
        data: cat,
      });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message,
    });
  }
};

