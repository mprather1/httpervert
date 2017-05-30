import chalk from 'chalk'

export default function getHTTPServer (options) {
  const { app, port, logger, packageName } = options

  var http = require('http').Server(app)

  const handleListen = function () {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${chalk.green(port)}...`)
  }

  http.on('listening', handleListen)

  http.listen(port)

  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })
}
