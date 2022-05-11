import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import connectMongo from '@shared/infra/mongoose'

const app = express()

app.use(cors())
app.use(express.json())

export { app, connectMongo }
