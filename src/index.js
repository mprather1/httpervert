import configApp from './app'
import configServer from './server'
import configNetServer from './net'
import chalk from 'chalk'

export default class HTTPervert {
  constructor (options) {
    const { pkg, logger } = options
    const {app, router} = configApp(options)

    this.app = app
    this.router = router
    this.server = configServer(this.app, options)
    this.net = configNetServer(options)

    logger.info(`configuring ${chalk.bgBlack.cyan(pkg.name)} ver.${chalk.bgBlack.green(pkg.version)}...`)
  }
}
