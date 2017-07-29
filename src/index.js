import chalk from 'chalk'
import http from 'http'

export default function getHTTPServer (options) {
  const { app, port, logger, packageDir } = options

  const server = http.Server(app)

  const packageName = packageDir.name
  const packageVersion = packageDir.version

  function handleListening () {
    logger.info(`${chalk.bgBlack.cyan(packageName)} ver.${chalk.bgBlack.green(packageVersion)} listening on port ${chalk.bgBlack.yellow(port)}`)
  }

  function handleRequest (req, res, next) {
    logger.info(`${chalk.yellow(res.statusCode)} - ${chalk.green(req.method)} => ${req.url}`)
  }

  server.on('listening', handleListening)

  server.on('request', handleRequest)
  server.listen(port)

  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })

  return server
}
