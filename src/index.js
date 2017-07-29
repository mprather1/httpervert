import express from 'express'
import http from 'http'
import configApp from './app'
import configServer from './server'

export default class HTTPervert {
  constructor (options) {
    this.app = express()
    this.server = http.Server(this.app)
    this.options = options
  }
}

HTTPervert.prototype.start = function () {
  configServer(this.server, this.options)
  configApp(this.app, this.options)
  this.server.listen(this.options.port)
}
