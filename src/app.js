import express from 'express'
import bodyParser from 'body-parser'

export default function configApp (options) {
  const { logger } = options
  const app = express()
  const router = express.Router()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  if (options.publicDir !== undefined) {
    app.use(express.static(options.publicDir))
  }

  if (options.resources !== undefined) {
    app.use('/resources', express.static(options.resources))
  }

  app.use('/api', router)

  app.use(function (req, res, next) {
    res.status(400)
    res.json({
      status: 'error',
      message: '404: Not Found'
    })
  })

  app.on('error', err => {
    logger.error(err)
  })

  return {
    app: app,
    router: router
  }
}
