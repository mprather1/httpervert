import {Server} from 'http'
import chalk from 'chalk'

export default function getHTTPServer (options) {
  const {app, port, environment, logger} = options
  
  const server = Server(app).listen(port, function () {
    logger.info('Environment:', environment)
    logger.info('Listening on port', port + '...')
  })
  server.timeout = 12000
  
  server.on('request', function (req, res) {
    logger.info(chalk.cyan("processing..."))
  })
  return server
}
