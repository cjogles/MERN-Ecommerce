

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     app.listen('5000', () => console.log(`listening on the port ${port}`));
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// import app from "./server.js";
// import mongodb from "mongodb";
// import dotenv from "dotenv";
// const uri = "mongodb+srv://jacksonogles28:g0LrjO6t2YD5QSW9@cluster0.esp8mno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   poolSize: 50,
//   wtimeout: 2500,
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
