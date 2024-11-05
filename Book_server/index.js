const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

//middleware
app.use(cors(
  {
    origin: ["https://deploy-mern-book_store.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
  }
));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb Connection


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

//ROUTE for main webpage using collections = "sample"


    //create a book collection 
    const bookcollections = client.db("books").collection("sample"); //database name=books, collection name=sample

    //insert a book to the database (using POST method)
    app.post("/upload_book", async(req,res) => {
      const data = req.body;
      const result = await bookcollections.insertOne(data);
      res.send(result);
      
    })
    
    //getting all the books from database
    app.get("/all_books", async(req,res) => {
      const books = bookcollections.find();
      const result = await books.toArray();
      res.send(result);
      
    })

        //getting a particular book from database
        app.get("/books/:id", async(req, res) => {
          const id = req.params.id;
          const filter = { _id: new ObjectId(id) };
          const result = await bookcollections.findOne(filter);
          res.send(result);
          
        })

    //updating(patch) a book data in database 
    app.patch("/books/:id", async(req, res) => {
        const id = req.params.id;
        //console.log(id);
        const updatedata = req.body;
        const filter = { _id: new ObjectId(id) };

    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };
    // Specify the update to set a value for the plot field
    const updateBook = {
      $set: {
        ...updatedata
      }
    }
      //update logic    
      const result = await bookcollections.updateOne(filter, updateBook, options);
      res.send(result);
    })

    //deleting a book data in database 
    app.delete("/books/:id", async(req,res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      //delete logic
      const result = await bookcollections.deleteOne(filter);
      res.send(result);
    })

    //filtering book data by category
    app.get("/all_books", async(req,res) => {
      
      let query = {};
      if (req.query && req.query.Genre)
      {
        query = {Genre: req.query.Genre};
      }
      //filter logic
      const result = await bookcollections.find(query).toArray();
      res.send(result);
    });

//ROUTE for REVIEW webpage using collections = "userReview"

const Reviewcollections = client.db("books").collection("userReview");

    //insert a book to the database (using POST method)
    app.post("/blog", async(req,res) => {                 //insert review
      const data = req.body;
      const result = await Reviewcollections.insertOne(data);
      res.send(result);
      
    });

       //getting all the reviews from database
       app.get("/reviews", async(req,res) => {
        const review = Reviewcollections.find();
        const result = await review.toArray();
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