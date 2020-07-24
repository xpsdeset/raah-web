import { UserIsAuthenticated, UserIsNotAuthenticated } from 'utils/router'
import { useFirebase, useFirebaseConnect } from "react-redux-firebase"

// redirect to /projects if user is already authed


export default (Component) => (props) => {
  
  const firebase = useFirebase() 
  var user = firebase.auth().currentUser;

  if(user){
       // User is signed in.
       console.log(   user.phoneNumber  )
    console.log('user is sined in ')
 
        if (user != null) {
        user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
        }



  }  else {
    // No user is signed in.

            return UserIsNotAuthenticated 
    }
  
  
  }
  
   


