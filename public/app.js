(function() {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDgsWPzfrouPJ57xj-OfQXPMnkm7sNlaA8",
    authDomain: "ashevillebb-64190.firebaseapp.com",
    databaseURL: "https://ashevillebb-64190.firebaseio.com",
    projectId: "ashevillebb-64190",
    storageBucket: "ashevillebb-64190.appspot.com",
    messagingSenderId: "231917444194"
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