import fs from 'fs'
import chalk from 'chalk'

export default function getHTTPServer (options) {
  const {app, environment, logger, packageName, config} = options

  const sslPath = config.sslPath + config.domainName[environment] + '/'

  var serverConfig = {
    key: fs.readFileSync(sslPath + 'privkey.pem'),
    cert: fs.readFileSync(sslPath + 'fullchain.pem')
  }

  const http = require('http').Server(app)
  const https = require('https').Server(serverConfig, app)

  const handleListening = function (port) {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${chalk.green(port)}...`)
  }
  
  http.addListener('listening', function () {
    handleListening(80)
  })
  
  https.addListener('listening', function () {
    handleListening(8000)
  })

  http.listen(8000)
  https.listen(443)
  
  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })

}
