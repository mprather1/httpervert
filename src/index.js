import fs from 'fs'
import chalk from 'chalk'

export default function getHTTPServer (options) {
  const {app, environment, port, logger, packageName, config} = options

  var http
  
  if (environment === 'production') {
    const sslPath = config.sslPath + config.domainName[environment] + '/'
  
    var serverConfig = {
      key: fs.readFileSync(sslPath + 'privkey.pem'),
      cert: fs.readFileSync(sslPath + 'fullchain.pem')
    }    
  
    http = require('https').Server(serverConfig, app)
  } else {
    http = require('http').Server(app)
  }
  
  const handleListen = function () {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${chalk.green(port)}...`)
  }
  
  http.addListener('listening', handleListen)

  http.listen(port)
  
  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })

}
