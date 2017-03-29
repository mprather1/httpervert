import {Server} from 'http'

export default function getHTTPServer (options) {
  const {app, port, environment, logger} = options
  
  const server = Server(app).listen(port, function () {
    if (environment === 'development') {
      logger.info('Listening on port', port + '...')
    }
  })
  return server
}