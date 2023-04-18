const packageJson = require('../package.json')
const baseConf = require('exp-config')

/**
 * If you'd like to implement some kind of parsing or validation, do it here
 * before the values end up in your application.
 */

module.exports = {
  name: packageJson.name,
  fullName: `${packageJson.name}:${packageJson.version}`,
  ...baseConf
}
