import { createContext, useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup,
        FacebookAuthProvider,
        GithubAuthProvider
} from "firebase/auth";
import { auth } from "../Firebase";

const userAuthContext = createContext<any>(undefined!);

export function UserAuthContextProvider({children} : any) {
    const [user, setUser] = useState("");
    function signUp(email : string, password : string) {
        return createUserWithEmailAndPassword(auth,email , password)
    }

    function logIn(email : string, password : string) {
        return signInWithEmailAndPassword(auth,email , password)
    }

    function logOut() {
        signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function FacebookIn() {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth , facebookProvider);
    }

    function FacebookOut() {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth , facebookProvider);
    }

    function GitIn() {
        const gitProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitProvider);
    }

    function GitOut() {
        const gitProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitProvider);
    }

    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser : any) =>{
            setUser(currentUser);
        });
        return ()=> {
            unsubscribe();
        }
    }, [])

    return (
        <userAuthContext.Provider value={{
            signUp, user,logIn ,logOut,googleSignIn, FacebookIn, FacebookOut,
            GitIn, GitOut
        }}
        >{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}