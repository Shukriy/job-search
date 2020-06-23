//imports
const express = require('express');
//instance of a server application:
//The express variable is a constructor, which is a function or method that returns an object.
// In our case, the express constructor returns an instance of an express server application.
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //json data back and fort

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

require("dotenv").config();


const admin = require('firebase-admin')
admin.initializeApp();

//web app's Firebase configuration

const api_key = process.env.api_key;
const project_id = process.env.project_id;
const sender_id = process.env.sender_id;
const app_id = process.env.app_id;
const measurement_id = process.env.measurement_id;

var firebaseConfig = {
    apiKey: api_key,
    authDomain: project_id + ".firebaseapp.com",
    databaseURL: "https://" + project_id + ".firebaseio.com",
    projectId: project_id,
    storageBucket: project_id + ".appspot.com",
    messagingSenderId: sender_id,
    appId: app_id,
    measurementId: measurement_id,
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics()

const auth = firebase.auth();
const db = firebase.firestore();


//Server Static Files
app.use(express.static(__dirname + '/public'));
app.use('/pages', express.static(__dirname + 'public/pages'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//start the server
const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => 
console.log(`Server running in port ${PORT}`)
);

// To create a good API server, we need to add HTTP endpoints, which will act as the interface
// between our server and the public.



//Dynamic route
app.post('/signin', (req, res) => {
    console.log(req.body);
    res.send('Login details received');

    let email = req.body.email;
    let password = req.body.password;

    console.log(`email: ${email} password: ${password}`);
    
    

    //TODO
    //get what is in the req.body save in new variable email and password
    //confirm whether they are correct with firebase
    //return yes or no to app

    //update this method to fetch

});

// Decodes the Firebase JSON Web Token
app.use(decodeIDToken);

/**
 * Decodes the JSON Web Token sent via the frontend app
 * Makes the currentUser (firebase) data available on the body.
 */
async function decodeIDToken(req= Request, res= Response, next= NextFunction) {
  if (req.headers.authorization.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }

  next();
}

app.get('/hello', (req, res) => {

  const user = req['currentUser'];

  if (!user) { 
      res.status(403).send('You must be logged in!');
  }
})


