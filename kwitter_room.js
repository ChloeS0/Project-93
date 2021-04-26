
//ADD YOUR FIREBASE LINKS HERE// Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAlKx77lK8cKSV9IbGRLCsHF1knN6UUmqg",
      authDomain: "kwitter-5f418.firebaseapp.com",
      databaseURL: "https://kwitter-5f418-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f418",
      storageBucket: "kwitter-5f418.appspot.com",
      messagingSenderId: "195304180700",
      appId: "1:195304180700:web:3c259b1708ead5c12add19"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    getItem=localStorage.getItem("username");
document.getElementById("display_name").innerHTML="Welcome " + getItem + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      window.location="index.html";
}




function addRoom()
{
      room=document.getElementById("get_room").value;
      
}