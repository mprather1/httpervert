## httpervert

### Synopsis

Create http server and express app

### Usage

#### index.js

      import path from 'path'
      import winston from 'winston'
      import HTTPervert from 'httpervert'
      import getRouter from './routes'
      
      const _package = require(path.join(path.dirname(__dirname), 'package.json'))
        
      var options = {
        port: process.env.PORT || 8000,
        environment: process.env.NODE_ENV || 'development',
        pkg: _package,
        logger: winston
      }
      
      const server = new HTTPervert(getRouter(options), options)
          
      server.start()
      server.listen(options.port)

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

    