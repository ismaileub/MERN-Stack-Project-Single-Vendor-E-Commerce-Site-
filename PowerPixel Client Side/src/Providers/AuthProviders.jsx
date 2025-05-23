import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        createUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;