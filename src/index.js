import express from 'express'
import http from 'http'
import configApp from './app'
import configServer from './server'

export default class HTTPervert {
  constructor (router, options) {
    this.app = express()
    this.server = http.Server(this.app)
    this.router = router
    this.options = options
    this.init()
  }

  init () {
    configServer(this.server, this.options)
    configApp(this.app, this.router, this.options)

    if (this.options.publicDir !== undefined) {
      this.app.use(express.static(this.options.publicDir))
    }

    if (this.options.staticDir !== undefined) {
      this.app.use('/css', express.static(this.options.staticDir))
    }
  }
}

HTTPervert.prototype.listen = function (port) {
  this.server.listen(port)
}
