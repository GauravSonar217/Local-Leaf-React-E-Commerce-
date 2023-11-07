import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDM4F2hHZJ19anqQKEuzY8TpVsHPgc1pDU",
    authDomain: "react-e-commerce-711ff.firebaseapp.com",
    databaseURL: "https://react-e-commerce-711ff-default-rtdb.firebaseio.com",
    projectId: "react-e-commerce-711ff",
    storageBucket: "react-e-commerce-711ff.appspot.com",
    messagingSenderId: "123337112298",
    appId: "1:123337112298:web:4baedf0e3089fcb1f67593",
};

export const app = initializeApp(firebaseConfig);