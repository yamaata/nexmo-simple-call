const express = require('express')
const router = express.Router()

/* GET task NCCO. */
router.get('/talk', (req, res, next) => {
  let ncco = [{
    action: 'talk',
    voiceName: 'Mizuki',
    text: 'こんにちは。初めての電話です。'
  }]

  res.json(ncco)
})

module.exports = router
