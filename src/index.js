import chalk from 'chalk'
import {getAppInfo as info} from 'shintech-info'

export default function getHTTPServer (options) {
  const { app, port, logger } = options

  var http = require('http').Server(app)

  function handleListen () {
    info(options)
  }

  function handleRequest (req, res, next) {
    logger.info(`${chalk.yellow(req.method)} => ${req.url}`)
  }

  http.on('listening', handleListen)

  http.on('request', handleRequest)
  http.listen(port)

  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })

  return http
}
