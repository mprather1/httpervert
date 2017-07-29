import express from 'express'
import http from 'http'
import winston from 'winston'
import configApp from './app'
import configServer from './server'

export default class HTTPervert {
  constructor (router, config) {
    this.app = express()
    this.server = http.Server(this.app)
    this.options = {
      port: process.env.PORT || 8000,
      environment: process.env.NODE_ENV || 'development',
      logger: winston,
      pkg: config.pkg,
      router: router,
      config: config
    }
  }
}

HTTPervert.prototype.start = function () {
  configServer(this.server, this.options)
  configApp(this.app, this.options)
  this.server.listen(this.options.port)
}
