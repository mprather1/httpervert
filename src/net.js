import net from 'net'
import chalk from 'chalk'

export default function configNetServer (options) {
  var { port, pkg, logger } = options

  const server = net.createServer()

  server.on('listening', () => {
    logger.info(`${chalk.bgBlack.cyan(pkg.name)} ver.${chalk.bgBlack.green(pkg.version)} net -> listening on port ${chalk.bgBlack.yellow(port)}...`)
  })

  server.on('error', err => {
    logger.error(err)
  })

  return server
}
