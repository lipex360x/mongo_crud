import { connect } from 'mongoose'

const connectDB = async () => {
  try {
    console.log('\nš Trying to connect to MongoDB')

    await connect(process.env.MONGO_URL)
    console.log('š Connected to database mongodb')
  } catch (error) {
    console.log('ā Fail to Connect to mongodb', error)
    process.exit()
  }
}

export default connectDB
