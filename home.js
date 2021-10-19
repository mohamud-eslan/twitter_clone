

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log("user is logged in");
      console.log(uid)

      //logout a user
      document.getElementById("logout").onclick = function(){
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "login.html";
      }).catch((error) => {
        // An error happened.
      });
    }
     
    } else {
      // User is signed out
      // ...
        console.log("user is not logged in")
    }
  });