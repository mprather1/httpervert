import {Server} from 'http'
import chalk from 'chalk'

export default function getHTTPServer (options) {
  const {app, port, environment, logger} = options
  
  const server = Server(app).listen(port, function () {
    if (environment === 'development') {
      logger.info('Listening on port', port + '...')
    }
  })
  server.timeout = 12000
  
  server.on('request', function (req, res) {
    if (environment === 'development') {
      logger.info(chalk.cyan("processing..."))
    }
  })
  return server
}
