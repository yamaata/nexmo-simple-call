const express = require('express')
const router = express.Router()

const Nexmo = require('nexmo')

/* POST making call. */
router.post('/call', (req, res, next) => {
  const nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    applicationId: process.env.APPLICATION_ID,
    privateKey: process.env.PRIVATE_KEY_PATH
  })

  nexmo.calls.create({
    from: {
      type: 'phone',
      number: '81312345678' // Unknown
    },
    to: [{
      type: 'phone',
      number: process.env.TO_NUMBER
    }],
    answer_url: [`https://${process.env.DOMAIN}/ncco/talk`]
  }, (callErr, callRes) => {
    if (callErr) {
      callErr.status = callErr.body.type
      next(callErr)
    } else {
      res.send('Now calling...')
    }
  })
})

module.exports = router
