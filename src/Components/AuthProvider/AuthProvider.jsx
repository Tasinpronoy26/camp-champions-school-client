import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    // Login

    const createLogIn = (email, password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //Log Out

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    }


    // Sign Up 
    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //GOOGLE SIGNUP

    const createUSerWithGoogle = (provider) => {

        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    // ON AUTH

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);

        })

        return () => unsubscribe();

    }, [])


    // WINDOW

    const info = {


        user,
        loading,
        createUser,
        createLogIn,
        logOut,
        createUSerWithGoogle

    }



    return (

        <AuthContext.Provider value={info}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;