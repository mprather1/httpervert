import net from 'net'
import chalk from 'chalk'

export default function configNetServer (options) {
  var { tcp, logger } = options

  const server = net.createServer()

  server.on('listening', () => {
    logger.info(`${chalk.magenta('net')}  -> listening on port ${chalk.bgBlack.yellow(tcp)}...`)
  })

  server.on('error', err => {
    logger.error(err)
  })

  return server
}
