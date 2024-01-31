import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPVc98kUDl2-mcKQ3dnnxe2-9GEpEVrtA",
    authDomain: "datsplus-68203.firebaseapp.com",
    projectId: "datsplus-68203",
    storageBucket: "datsplus-68203.appspot.com",
    messagingSenderId: "906874665942",
    appId: "1:906874665942:web:ca1f512c1337db4e854277",
    measurementId: "G-SFF2J2CK8S"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }