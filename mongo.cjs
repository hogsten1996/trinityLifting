const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://hogsten1996:smooth5164@trinitylifting.coebsmw.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function fetchData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");


    const database = client.db("trinitylifting"); // Replace with your actual database name
    const collection = database.collection("articles"); // Replace with your actual collection name


    // Find all documents in the specified collection
    const documents = await collection.find({}).toArray();


    console.log("Retrieved documents:", documents);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}


async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





