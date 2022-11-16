
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyDR9H3B1cKA_J_zSXRyBOmwMFRa5v-n0FI",
  authDomain: "hola-holi-siiiiiiiiiii.firebaseapp.com",
  databaseURL: "https://hola-holi-siiiiiiiiiii-default-rtdb.firebaseio.com",
  projectId: "hola-holi-siiiiiiiiiii",
  storageBucket: "hola-holi-siiiiiiiiiii.appspot.com",
  messagingSenderId: "229554815881",
  appId: "1:229554815881:web:ebeddbd20e5b9778939758",
  measurementId: "G-9X6H835J9W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }

  



  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }



      
