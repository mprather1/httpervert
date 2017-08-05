import bodyParser from 'body-parser'

export default function configApp (app, router, options) {
  const { logger } = options

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

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

  return app
}
