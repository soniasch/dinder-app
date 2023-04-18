const config = require('./config')
const server = require('./src')

async function main (app, config) {
  app.listen(config.port, () => {
    console.log(`${config.name} Listening to http://localhost:${config.port}`)
  })
}

main(server, config)
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
