const express = require('express')
const router = express.Router()

/* POST event webhook. */
router.post('/event', (req, res, next) => {
  res.sendStatus(200)
})

module.exports = router
