    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
      
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDdn3l7XKHW9O4jHLwaLUOqLiN_phmuo9g",
        authDomain: "crud-itics.firebaseapp.com",
        projectId: "crud-itics",
        storageBucket: "crud-itics.appspot.com",
        messagingSenderId: "653392599229",
        appId: "1:653392599229:web:8c52138512fe3ec3427fd4"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore()

    export const Savetask = (title, description) => {
        addDoc(collection(db, 'tasks'), {title, description})
    }
