

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
  const mockAPIResponse = require('./mockAPI.js')

  // Start up an instance of app
  const app = express()
  
  // Cors allows the browser and server to communicate without any security interruptions
  const cors = require('cors');
  
  app.use(cors());
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json());
  app.use(express.static('dist'))
  
  





const dotenv = require('dotenv');
dotenv.config();

 // handle URL
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let userLink = ''; 

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// get data 
app.post('/api', async function(req, res) {
    console.log(res);
    userLink = req.body.url;
    console.log(userLink);
    console.log(`You entered: ${userLink}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userLink}&lang=en`
console.log('api call',apiURL);
try {
    const response = await fetch(apiURL)
    console.log("response",response);
    const result = await response.json()
    console.log('Data received',result)
    res.send(result)
} catch (error) {
    console.log('error', error);
}  
})
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
