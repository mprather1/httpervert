import {getAppInfo as info} from 'shintech-info'

export default function getHTTPServer (options) {
  const { app, port } = options

  var http = require('http').Server(app)

  const handleListen = function () {
    info(options)
  }

  http.on('listening', handleListen)

  http.listen(port)

  process.on('SIGINT', function () {
    console.log('\nGoodbye! Thanks for coming...')
    process.exit()
  })

  return http
}
