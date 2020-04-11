//require('dotenv').config(); //THIS IS THE PROBLEM. "require is not defined"
//var x = console.log(process.env.apiKey);

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyD0T5nYoEvPbc594yZyHBMFCZAVk2BGVi8",
    authDomain: "webify-580df.firebaseapp.com",
    databaseURL: "https://webify-580df.firebaseio.com",
    projectId: "webify-580df",
    storageBucket: "webify-580df.appspot.com",
    messagingSenderId: "707986181733",
    appId: "1:707986181733:web:fe7e63d5b783be0dba008c",
    measurementId: "G-GX2562386W"
    };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, message);

  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}