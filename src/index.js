import http from 'https'
import fs from 'fs'
import chalk from 'chalk'

export default function getHTTPServer (options) {
  const {app, port, logger, packageName, config} = options

  const sslPath = config.sslPath['development'] + config.domainName + '/'

  var serverConfig = {
    key: fs.readFileSync(sslPath + 'privkey.pem'),
    cert: fs.readFileSync(sslPath + 'fullchain.pem')
  }

  const server = http.createServer(serverConfig, app)

  server.on('listening', function () {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${chalk.green(port)}...`)
  })

  server.timeout = 12000
  server.listen(port)

  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })

  return server
}
