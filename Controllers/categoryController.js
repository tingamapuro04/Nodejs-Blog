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