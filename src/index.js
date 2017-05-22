import {Server} from 'http'
import chalk from 'chalk'

export default function getHTTPServer (options) {
  const {app, port, logger, packageName} = options

  const server = Server(app).listen(port, function () {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${chalk.green(port)}...`)
  })
  server.timeout = 12000

  return server
}
