import { app, connectMongo } from './app'

const createServer = async () => {
  await connectMongo()

  const server = app.listen(4000, () => console.log('Server started on port 4000'))

  process.on('SIGINT', async () => {
    server.close()
    console.log('App server and connection to MongoDB closed')
  })

  process.on('SIGTERM', async () => {
    server.close()
    console.log('App server and connection to MongoDB closed')
  })
}

createServer()
