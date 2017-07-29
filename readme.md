## httpervert

### Synopsis

Create http server and express app

### Usage

    import HTTPervert from 'httpervert'
    import {Router} from 'express'
    
    const router = Router()

    const _package = require(path.join(path.dirname(__dirname), 'package.json'))

    router.route('/models')
    .get(function (req, res, next) {
      res.json({
        body: 'test'
      })
    })
      
    const server = new HTTPervert(router, {
      pkg: _package
    })
    
    server.start()
