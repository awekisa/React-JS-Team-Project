const express = require('express')
const authCheck = require('../middleware/auth-check')
const authAdminCheck = require('../middleware/auth-admin-check')
const Testimonial = require('../data/Testimonial')

const router = new express.Router()

function validateTestimonialForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.text !== 'string' || payload.text.length > 50) {
    isFormValid = false
    errors.name = 'Text should be at least 50 symbols.'
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

router.post('/add', authCheck, (req, res) => {
// router.post('/add', (req, res) => {
  const testimonial = req.body
  const userId = req.user._id

  const validationResult = validateTestimonialForm(testimonial)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Testimonial
    .create({
      text: testimonial.text,
      creator: userId
    })
    .then(newTestimonial => {
      res.status(200).json({
        success: true,
        message: 'Testimonial added successfuly.',
        newTestimonial
      })
    })
    .catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: 'Failed to add testimonial.',
        testimonial
      })
    })
})

// router.post('/approve', authAdminCheck, (req, res) => {
//   const testimonialId = req.params.id

//   Testimonial
//     .findById(testimonialId)
//     .then(testimonial => {
//       testimonial.approved = true
//       testimonial
//         .save()
//         .then(updatedTestimonial => {
//           res.status(200).json({
//             success: false,
//             message: 'Testimonial approved.',
//             updatedTestimonial
//           })
//         })
//     })
//     .catch(err => {
//       console.log(err.message)
//       res.status(200).json({
//         success: false,
//         message: 'Failed to approve testimonial.'
//       })
//     })
// })

// router.post('/disapprove', authAdminCheck, (req, res) => {
//   const testimonialId = req.params.id

//   Testimonial
//     .findById(testimonialId)
//     .then(testimonial => {
//       testimonial.approved = false
//       testimonial
//         .save()
//         .then(updatedTestimonial => {
//           res.status(200).json({
//             success: false,
//             message: 'Testimonial disapproved.',
//             updatedTestimonial
//           })
//         })
//     })
//     .catch(err => {
//       console.log(err.message)
//       res.status(200).json({
//         success: false,
//         message: 'Failed to disapprove testimonial.'
//       })
//     })
// })

router.get('/all-approved', (req, res) => {
  Testimonial
    .find({})
    .then(testimonials => {
      res.status(200).json(testimonials)
    })
    .catch(err => {
      console.log(err.message)
      res.status(200).json({
        success: false,
        message: 'Failed to get testimonials.'
      })
    })
})

router.get('/all', authAdminCheck, (req, res) => {
  Testimonial
    .find({})
    .then(testimonials => {
      res.status(200).json(testimonials)
    })
    .catch(err => {
      console.log(err.message)
      res.status(200).json({
        success: false,
        message: 'Failed to add testimonial.'
      })
    })
})

router.post('/edit/:id', authAdminCheck, (req, res) => {
  let testimonialId = req.params.id
  let data = req.body

  Testimonial
    .findById(testimonialId)
    .then(testimonial => {
      testimonial.text = data.text
      testimonial.approved = data.approved
      testimonial
        .save()
        .then(updatedTestimonial => {
          res.status(200).json(updatedTestimonial)
        })
    })
    .catch(err => {
      console.log(err.message)
      res.status(200).json({
        success: false,
        message: 'Failed to update testimonial.'
      })
    })
})

router.post('/delete/:id', authAdminCheck, (req, res) => {
  let testimonialId = req.params.id

  Testimonial
    .findByIdAndRemove(testimonialId)
    .then(testimonial => {
      res.status(200).json(testimonial)
    })
    .catch(err => {
      console.log(err.message)
      res.status(200).json({
        success: false,
        message: 'Failed to delete testimonial.'
      })
    })
})

module.exports = router