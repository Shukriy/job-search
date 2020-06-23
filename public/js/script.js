


document.getElementById('submitBtn').addEventListener('click', function() {

    let emailAddress = document.getElementsByClassName('email')[0].value;
    let password = document.getElementsByClassName('password')[0].value;
    

     
    if(emailAddress != "" && password != ""){
        
        sendToAPI(emailAddress, password);

    }else{
        window.alert("Please, type in your login details in order to signin")
    }
    
    
});

function sendLogin(email, password){

    console.log(email);
    sendToAPI(email, password);

} 

function sendToAPI(emailAddress, password){

    let req = new XMLHttpRequest();
    req.open('POST', '/signin');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({email: emailAddress, password:password}));
    
    req.onload = function () {
        console.log(req.responseText);
        console.log('request done');
      };

    //whenever the request loads and you get response back
    // req.addEventListener('load', () =>{
    //     console.log(req.responseText);
    //     console.log('request done');
    // });

    req.addEventListener('error', () =>{
        console.log("Something went wrong");
        console.log(e);
    });


// fetch('/signin', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({value: emailAddress, value2: password}),
//     })
//     .then(response => {response.json()})
//     .then(emailAddress => {
//     console.log('Success:', emailAddress);
//     })
//     .catch((error) => {
//     console.error('Error:', error);
//     });

// fetch('./data.json').then(response => {
//           console.log(response);
//           return response.json();
//         }).then(data => {
//           // Work with JSON data here
//           console.log(data);
//         }).catch(err => {
//           // Do something for an error here
//           console.log("Error Reading data " + err);
//         });
    
}

import firebase from 'firebase/app';
const auth = firebase.auth();
const url = 'https://your-cloud-function-url';


// async function fetchFromAPI() {

//   const user = auth.currentUser;
//   const token = user && (await user.getIdToken());

//   const res = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return res.json();
}