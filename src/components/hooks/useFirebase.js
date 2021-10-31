import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsigGoogle = (url, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                history.push(url);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                setError("Name Updated!!!");
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logout = (history) => {
        signOut(auth)
            .then(resut => {
                setUser({});
                history.push('/login');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [auth]);
    return {
        user,
        error,
        signInUsigGoogle,
        logout,
        isLoading,
        setUserName
    }
}

export default useFirebase;