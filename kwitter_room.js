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

user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name+ " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{ 
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html"; 
}