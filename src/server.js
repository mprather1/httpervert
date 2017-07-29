import chalk from 'chalk'

export default function configServer (server, options) {
  const { port, pkg, logger } = options

  server.on('listening', () => {
    logger.info(`${chalk.bgBlack.cyan(pkg.name)} ver.${chalk.bgBlack.green(pkg.version)} listening on port ${chalk.bgBlack.yellow(port)}`)
  })

  server.on('request', (req, res, next) => {
    const status = getStatusCodeStyle(res.statusCode)
    logger[status.level](`${chalk.yellow(req.method)} - ${status.code} => ${req.url} ${status.message}`)
  })

  return server
}

function getStatusCodeStyle (status) {
  if (status === 400) return { code: chalk.red(status), level: 'error', message: '--- 404 - Not Found' }
  if (status === 200) return { code: chalk.green(status), level: 'info', message: '' }
}
