const firebaseConfig = {
    apiKey: "AIzaSyABQoWd6bCMRnZtaBzuNNEgN8eB4XLh6sA",
    authDomain: "kwitter-735df.firebaseapp.com",
    databaseURL: "https://kwitter-735df-default-rtdb.firebaseio.com",
    projectId: "kwitter-735df",
    storageBucket: "kwitter-735df.appspot.com",
    messagingSenderId: "134203952088",
    appId: "1:134203952088:web:d480fd73f04723cb11c0ad"
  };
  const app = initializeApp(firebaseConfig);
  

  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML = username;

  function logout() {
      window.location="index.html";
  }