import React, {createContext, useEffect, useState} from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Authcontext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const authenication = ({children}) => {

    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);

    const createUser = (email,password) => {
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginGoogle = () => {
      setLoad(true);
      return signInWithPopup(auth, googleProvider);
    }

    const login = () => {
      setLoad(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
          //console.log(currentUser);
          setUser(currentUser);
          setLoad(false);
       });
       return () => {
        return unsubscribe();
       }
  },[])

    const authInfo = {
        user,
        createUser,
        loginGoogle,
        login,
    }

  return (
    
    <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
  )
}

export default authenication