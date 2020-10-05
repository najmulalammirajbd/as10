const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000

const app = express()
app.use(cors());
app.use(bodyParser.json());

const pass = "Najmulalammiraj1234";



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://volunteernetwork:Najmulalammiraj1234@cluster0.tfgke.mongodb.net/volunteer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteer").collection("registration");
app.post('/addRegistration' , (req , res) => {
    const newRegistration = req.body;
    collection.insertOne(newRegistration)
    .then(result => {
        res.send(result.insertedCount > 0 );
    })
    console.log(newRegistration);
})
});


app.get('/', (req, res) => {
  res.sendFile(__dirname +'../as10/src/components/Regi/Regi.js')
})

app.listen(port)