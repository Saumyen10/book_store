const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//momgodb Connection


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://saumyen45:XAqvwaNPpLxnCWQq@cluster0.9qofcdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a book collection 
    const bookcollections = client.db("books").collection("sample"); //database name, collection name

    //insert a book to the database (suing POST method)
    app.post("/upload_book", async(req,res) => {
      const data = req.body;
      const result = await bookcollections.insertOne(data);
      res.send(result);
      
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You are successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})