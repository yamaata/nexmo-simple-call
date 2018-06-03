require('dotenv-safe').config()

const express = require('express')
const path = require('path')
const logger = require('morgan')
const createError = require('http-errors')

const indexRouter = require('./routes/index')
const webhookRouter = require('./routes/webhook')
const voiceRouter = require('./routes/voice')
const nccoRouter = require('./routes/ncco')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/webhook', webhookRouter)
app.use('/voice', voiceRouter)
app.use('/ncco', nccoRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500).json({ err: JSON.stringify(err) })
})

module.exports = app
