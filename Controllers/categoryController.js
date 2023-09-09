import Category from '../Models/categoriesModel.js';

export const addCategory = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  console.log(req.user);
  try {
    if (req.user.id == "64fcc85e4098ec8fbfcc1320"){
    const cat = await Category.create(body);
    res.status(201).json({ message: 'category created successfully', data :cat });
    } else {
      res.status(300).json({
        mess: "Failure",
      })
    }
  } catch (error) {
    //next(error)
    res.status(500).json({
      mess: "Failure",
      data: error.message
    })
  }
}