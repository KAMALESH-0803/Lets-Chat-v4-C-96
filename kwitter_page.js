//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCkOtA2LUdBrYiSto0It2Bpr_qnBpv00DM",
    authDomain: "lets-chat-7af9e.firebaseapp.com",
    databaseURL: "https://lets-chat-7af9e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-7af9e",
    storageBucket: "lets-chat-7af9e.appspot.com",
    messagingSenderId: "402514253024",
    appId: "1:402514253024:web:55e256d10bd7ac50abac85"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

function logout() 
{
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location.replace("index.html");
}
function send() 
{
    msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({
         name:user_name,
          message:msg,
           like:0 
       }); 
    document.getElementById("msg").value = ""; }
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
    } });  }); }
getData();