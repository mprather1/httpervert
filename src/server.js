import http from 'http'
import chalk from 'chalk'

export default function configServer (app, options) {
  const { port, pkg, logger } = options
  const server = http.Server(app)

  server.on('listening', () => {
    logger.info(`${chalk.bgBlack.cyan(pkg.name)} ver.${chalk.bgBlack.green(pkg.version)} listening on port ${chalk.bgBlack.yellow(port)}...`)
  })

  server.on('request', (req, res, next) => {
    const status = getStatusCodeStyle(res.statusCode)
    logger[status.level](`${status.code} - ${chalk.yellow(req.method)} => ${req.url} ${status.message}`)
  })

  server.on('error', err => {
    logger.error(err)
  })

  return server
}

function getStatusCodeStyle (status) {
  if (status === 400) {
    return { code: chalk.red(status), level: 'error', message: '--- Not Found' }
  } else if (status === 304) {
    return { code: chalk.cyan(status), level: 'info', message: '' }
  } else {
    return { code: chalk.green(status), level: 'info', message: '' }
  }
}
