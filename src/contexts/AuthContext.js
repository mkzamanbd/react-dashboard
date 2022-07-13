import React, { useContext, useState, useEffect, useMemo } from 'react';
import {
    signOut,
    updateEmail,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from 'hooks/useFirebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function updateUserEmail(email) {
        return updateEmail(auth, email);
    }

    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                setCurrentUser(user);
                setLoading(false);
            }),
        []
    );

    const value = useMemo(
        () => ({
            login,
            signup,
            logout,
            currentUser,
            resetPassword,
            updateUserEmail,
        }),
        [currentUser]
    );

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center text-white backdrop-blur bg-black/50">
                    Loading.....
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}
