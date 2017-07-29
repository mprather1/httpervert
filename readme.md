## httpervert

### Synopsis

Create http server and express app

### Usage

    import path from 'path'
    import winston from 'winston'
    import {Router} from 'express'
    import HTTPervert from 'httpervert'
    
    const router = Router()

    const _package = require(path.join(path.dirname(__dirname), 'package.json'))

    router.route('/models')
    .get(function (req, res, next) {
      res.json({
        body: 'test'
      })
    })

    const options = {
      port: process.env.PORT || 8000,
      environment: process.env.NODE_ENV || 'development',
      pkg: _package,
      router: router,
      logger: winston
    }
      
    const server = new HTTPervert(options)
    server.start()
