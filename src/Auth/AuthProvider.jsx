import {  createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";





export const AuthContext = createContext(null);


const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


// google log in

const googleLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, googleprovider)
}




//log in

const logInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}




// createUser email and password
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }



// log Out
const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}





// user 
useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth, currentUser =>{
      
        setUser(currentUser)
        setLoading(false)
    })
    return()=>{
        unSubcribe();
    } 
},[])










    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        logInUser,
        logOut,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
  };