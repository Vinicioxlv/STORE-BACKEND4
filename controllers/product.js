const ProductModel = require('../models/products')


const getProducts = async () => {
  return ProductModel.find({})
}

const getByIDProducts = async(_id) =>{
  return productsModel.findOne({_id})
}


const createProduct = async (body) => {
  const newProduct = new ProductModel(body)
  newProduct.save()
  return newProduct
}

const updateProduct = async (_id, updateObject) => {
  return ProductModel.findOneAndUpdate({ _id }, updateObject, {
    upsert: false,
    new: true
  })
}

const deleteProduct = async (_id) => {
  return ProductModel.findOneAndDelete({ _id })
}


module.exports = {
  getProducts,
  getByIDProducts,
  createProduct,
  updateProduct,
  deleteProduct
}
