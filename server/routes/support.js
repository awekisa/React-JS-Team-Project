const express = require('express')
const Thread = require('../data/Thread')

const router = new express.Router()

router.get('/all', (req, res) => {
  Thread.find({}).then((threads) => {
    res.status(200).json(threads)
  })
})

router.get('/thread/:username', (req, res) => {
  const username = req.params.username
  if(!username || username == 'admin') {
    res.status(200).json({
      success: false
    })

    return
  }
  Thread.findOne({createdByUsername: username}).then((thread) => {
    if(!thread) {
      Thread.create({
        createdByUsername: username,
        messages: []
      })
      return
    } else {
      res.status(200).json(thread)
      return
    }
  })
})


router.post('/send', (req, res) => {
  let body = req.body
  let username = body.user
  let message = body.message
  let customer = body.customer

  if(customer) {
    Thread.findOne({createdByUsername: customer}).then((thread) => {
    
      thread.messages.push({
        message: message,
        createdByUsername: username,
        createdOn: Date.now()
      })
      thread.save()
    })
    
    return
  }

    Thread.findOne({createdByUsername: username}).then((thread) => {
    
    thread.messages.push({
      message: message,
      createdByUsername: username,
      createdOn: Date.now()
    })
    thread.save()
  })
  
  
})

module.exports = router