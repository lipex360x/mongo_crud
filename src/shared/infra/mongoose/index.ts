import { connect } from 'mongoose'

const connectDB = async () => {
  try {
    console.log('\n📚 trying to connect to mongodb')

    await connect(process.env.MONGO_URL)
    console.log('📚 Connected to database mongodb')
  } catch (error) {
    console.log('❌ Fail to Connect to mongodb', error)
    process.exit()
  }
}

export default connectDB
