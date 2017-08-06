import configApp from './app'
import configServer from './server'

export default class HTTPervert {
  constructor (options) {
    const {app, router} = configApp(options)

    this.app = app
    this.router = router
    this.server = configServer(this.app, options)
  }
}

HTTPervert.prototype.listen = function (port) {
  this.server.listen(port)
}
