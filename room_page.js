var firebaseConfig = {
    apiKey: "AIzaSyAkeGUCtrrEaYXNqlODKR-uQ5ubKqGDFXg",
    authDomain: "vividly-c4e9e.firebaseapp.com",
    projectId: "vividly-c4e9e",
    storageBucket: "vividly-c4e9e.appspot.com",
    messagingSenderId: "393478931651",
    appId: "1:393478931651:web:8f475f5df8b94cc3770e76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
    room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
