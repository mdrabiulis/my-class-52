import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";




// const firebaseConfig = {
//   apiKey: "AIzaSyAwaYFsb9iVABAQMYTJUNqUVqunD1ltQhs",
//   authDomain: "faehanvai.firebaseapp.com",
//   projectId: "faehanvai",
//   storageBucket: "faehanvai.appspot.com",
//   messagingSenderId: "708226136633",
//   appId: "1:708226136633:web:9a8a63f41313295bebabe8"
// };



// ======================


const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);