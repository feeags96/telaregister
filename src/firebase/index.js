
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5FkwzOwvndjjDOV3QDcn4nc92xn-isjU",
  authDomain: "auth-app-69a03.firebaseapp.com",
  projectId: "auth-app-69a03",
  storageBucket: "auth-app-69a03.appspot.com",
  messagingSenderId: "835856240737",
  appId: "1:835856240737:web:d00adfb0c77285615e5a20"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);

export { auth }