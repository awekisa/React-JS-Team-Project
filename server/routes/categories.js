const express = require('express')
const authCheck = require('../middleware/auth-check')
const Category = require('../data/Category')

const router = new express.Router()

function validateCategoryForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.name !== 'string' || payload.name.length > 30) {
    isFormValid = false
    errors.name = 'Category name must be no more than 30 symbols.'
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

// router.post('/products/add', authCheck, (req, res) => {
router.post('/add', (req, res) => {   // change authCheck with adminCheck
  const category = req.body
  // const userId = req.user._id    // fix admin issue

  const validationResult = validateCategoryForm(category)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Category
    .findOne({name: category.name})
    .then(categoryFound => {
      if (!categoryFound) {
        Category
          .create({
            name: category.name
          })
          .then(newCategory => {
            res.status(200).json({
              success: true,
              message: 'Category added successfuly.',
              newCategory
            })
          })
          .catch(err => {
            console.log(err)
            res.status(200).json({
              success: false,
              message: 'Failed to add category.',
              category
            })
          })
      } else {
        res.status(200).json({
          success: false,
          message: 'Category already exists.',
          category
        })
      }
    })
})

router.get('/all', (req, res) => {
  Category
    .find({})
    .then(categories => {
      res.status(200).json(categories)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/edit/:id', (req, res) => {
  let categoryId = req.params.id

  Category
    .findById(categoryId)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/edit/:id', (req, res) => {
  let categoryId = req.params.id
  let data = req.body

  Category
    .findById(categoryId)
    .then(category => {
      category.name = data.name
      category
        .save()
        .then(updatedCategory => {
          res.status(200).json(category)
        })
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/delete/:id', (req, res) => {
  let categoryId = req.params.id

  Category
    .findById(categoryId)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/delete/:id', (req, res) => {
  let categoryId = req.params.id

  Category
    .findByIdAndRemove(categoryId)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
