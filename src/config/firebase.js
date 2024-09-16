import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBBw0MlR3G3j7LxiLk15c8U2bZ2stjzQZM",
    authDomain: "chat-app-2d880.firebaseapp.com",
    projectId: "chat-app-2d880",
    storageBucket: "chat-app-2d880.appspot.com",
    messagingSenderId: "321819270132",
    appId: "1:321819270132:web:fc5a7b3e7867aa63bd37a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, There i am using chat app",
            lastSeen: Date.now()
        })
        await setDoc(doc(db, "chats", user.uid), {
            chatData: []
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }
}


export {signup} 