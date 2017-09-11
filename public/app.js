(function() {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBdCIC3vHp7zDCU9G4wKxcdl7AVHQVJTYA",
    authDomain: "asheville-b5f13.firebaseapp.com",
    databaseURL: "https://asheville-b5f13.firebaseio.com",
    projectId: "asheville-b5f13",
    storageBucket: "asheville-b5f13.appspot.com",
    messagingSenderId: "412484960663"
  };
  firebase.initializeApp(config);

//   Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

// Add login event
btnLogin.addEventListener('click', e=> {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
})

}());