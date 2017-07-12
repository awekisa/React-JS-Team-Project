const express = require('express')
const authCheck = require('../middleware/auth-check')
const authAdminCheck = require('../middleware/auth-admin-check')
const Product = require('../data/Product')

const router = new express.Router()

function validateProductForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.title !== 'string' || payload.title.length > 50) {
    isFormValid = false
    errors.name = 'Title must be no more than 50 symbols.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.age = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length > 300) {
    isFormValid = false
    errors.type = 'Description must be no longer than 300 symbols.'
  }

  if (!payload || typeof payload.category !== 'string') {
    isFormValid = false
    errors.type = 'Category is missing.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

// router.post('/products/add', (req, res) => {
router.post('/add', authAdminCheck, (req, res) => {   // change authCheck with adminCheck

  const product = req.body
  const user = req.user
  // const userId = req.user._id    // fix admin issue

  const validationResult = validateProductForm(product)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Product
    .create({
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
      creator: product.creator,   // TODO should receive userId form input
      category: product.category
    })
    .then(newProduct => {
      res.status(200).json({
        success: true,
        message: 'Product added successfuly.',
        newProduct
      })
    })
    .catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: 'Failed to add product.',
        product
      })
    })
})

router.get('/all', (req, res) => {
  const page = parseInt(req.query.page) || 1

  const pageSize = 10

  let startIndex = (page - 1) * pageSize
  let endIndex = startIndex + pageSize

  Product
    .find({})
    .then(products => {
      let productsToSend = products.slice(startIndex, endIndex)
      res.status(200).json(productsToSend)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/details/:id', (req, res) => {
  const id = req.params.id
  
  Product.findById(id).then((product) => {

    if(!product) {
       res.status(200).json({
        success: false,
        message: 'There is no such product in the database'
      })

      return
    }

    res.status(200).json({
      success: true,
      product
    })
  })
})

router.post('/delete/:id', (req, res) => {
  const id = req.params.id
  
  Product.deleteOne({_id: id}).then((product) => {
    res.status(200).json({
      success: true
    })
  })
})

router.post('/edit', (req, res) => {
  const product = req.body

  let id = product._id

  Product.findById(id).then((productFromDb) => {
    productFromDb.title = product.title
    productFromDb.category = product.category
    productFromDb.description = product.description
    productFromDb.image = product.image
    productFromDb.price = product.price
    productFromDb.save()

    res.status(200).json({
      success: true
    })
  })
})

router.post('/details/:id/comments/create', authCheck, (req, res) => {
  // const id = req.params.id
  // const user = req.user.name

  // let pet = petsData.findById(id)

  // if (!pet) {
  //   return res.status(200).json({
  //     success: false,
  //     message: 'Pet does not exists!'
  //   })
  // }

  // const comment = req.body

  // if (!comment.message || typeof comment.message !== 'string' || comment.message.length < 10) {
  //   return res.status(200).json({
  //     success: false,
  //     message: 'Comment message must be at least 10 symbols.'
  //   })
  // }

  // petsData.addComment(id, comment.message, user)

  // res.status(200).json({
  //   success: true,
  //   message: 'Comment added successfuly.',
  //   comment: {
  //     id,
  //     message: comment.message,
  //     user
  //   }
  // })
})

router.get('/details/:id/comments', authCheck, (req, res) => {
  // const id = req.params.id

  // const pet = petsData.findById(id)

  // if (!pet) {
  //   return res.status(200).json({
  //     success: false,
  //     message: 'Pet does not exists!'
  //   })
  // }

  // const response = petsData.allComments(id)

  // res.status(200).json(response)
})

module.exports = router
