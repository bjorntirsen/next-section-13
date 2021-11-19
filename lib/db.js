import { MongoClient } from 'mongodb';

const connectToDatabase = async () => {
  const client = await MongoClient.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
  });
  return client;
};

export default connectToDatabase;
