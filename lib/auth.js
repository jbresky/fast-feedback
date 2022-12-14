import Cookies from 'js-cookie';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { createUser } from './db';
import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth(){
    const [user, setUser] = useState(null);

    const handleUser = (rawUser) => {
        if(rawUser){
            const user = formatUser(rawUser);
            const {token, ...userWithoutToken} = user
            
            createUser(user.uid, userWithoutToken);
            
            setUser(user)

            Cookies.set('fast-feedback-auth', true, {
                expires: 1
            })
            return user
        } else {
            setUser(false)
            return false
        }
    }

    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then(res => {
                handleUser(res.user)
            })
    }

const signOut = () => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            setUser(false);
        })
}

useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if(user){
            setUser(user)
        } else {
            setUser(false)
        }
    });

    return () => unsubscribe();
}, []);

return {
    user,
    signinWithGithub,
    signOut
}
}

const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.xa,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL
    }
}