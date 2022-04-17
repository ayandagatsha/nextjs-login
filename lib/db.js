import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin-ayanda:test123@cluster0.xznp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );

  return client;
}
