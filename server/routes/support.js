const express = require('express')
const Thread = require('../data/Thread')

const router = new express.Router()

router.post('/send', (req, res) => {
  let body = req.body
  let username = body.user
  let message = body.message
  let time = body.time
  
  Thread.findOne({createdByUsername: username}).then((thread) => {
    if(!thread) {
      Thread.create({
        createdByUsername: username,
        messages: [{
          message: message,
          createdByUsername: username,
          createdOn: Date.now()
        }]
      })
    }
    else {
      thread.messages.push({
        message: message,
        createdByUsername: username,
        createdOn: Date.now()
      })
      thread.save()
    }
  })

})

module.exports = router