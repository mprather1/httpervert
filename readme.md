## httpervert

### Synopsis

Create http server and express app

### Usage

#### index.js

    import HTTPervert from 'httpervert'
    import path from 'path'
    import winston from 'winston'
    
    const _package = require(path.join(path.dirname(__dirname), 'package.json'))
    
    var options = {
      port: process.env.PORT || 8000,
      environment: process.env.NODE_ENV || 'development',
      pkg: _package,
      logger: winston,
      resources: path.join(path.dirname(__dirname), 'resources'),
      publicDir: path.join(path.dirname(__dirname), 'public')
    }
    
    var httpervert = new HTTPervert(options)
    
    const { app, server, router } = httpervert
    
    app.set('view engine', 'ejs')
    app.set('views', path.join(path.dirname(__dirname), 'views'))
    
    router.route('/')
      .get(route.function)
    
    server.listen(8000)


#### routes.js

    import {Router} from 'express'
    
    export default function getRouter (options) {
      const router = Router()
    
      router.route('/')
        .get(function (req, res, next) {
          res.json({
            body: 'test'
          })
        })
    
      return router
    }

    