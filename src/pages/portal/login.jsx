import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";



const Login = () => {

    const navigate = useNavigate();
    const { setCurrentUser } = useAuth();
    const [email, setEmail] = useState("admin@datsplus.com");
    const [password, setPassword] = useState("datsplus");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(userCredential)
            // Set the user context
            setCurrentUser(user);

            navigate("/homeportal");
        } catch (error) {
            console.error("Authentication Error:", error.code, error.message);
            setNotice("You entered a wrong username or password.");
        }
    }

    const [passwordType, setPasswordType] = useState("password");
   
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    return (
        <>
            <div className="min-h-screen bg-[#02174c] flex justify-center items-center overflow-y-hidden overflow-x-hidden">
                <div className="absolute w-60 h-60 rounded-xl bg-[#b3b9c9] -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
                {/* <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-0 -right-10 transform rotate-12 hidden md:block" /> */}
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20  overflow-y-hidden overflow-x-hidden">
                    <form action="">
                        { "" !== notice &&
                            <div className = "alert alert-warning" role = "alert">
                                { notice }    
                            </div>
                        }   
                        <div>
                            <h1 className="text-3xl font-bold text-center mb-4 ">
                                Sign In
                            </h1>
                            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">
                                Enter your credentials to enjoy all the services!
                            </p>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value = { email } onChange = { (e) => setEmail(e.target.value) }
                                className="block text-xs py-3 px-4 rounded-lg w-full border outline-purple-500"
                            />
                            <div className="relative">
                                <input
                                placeholder="Password"
                                value = { password } onChange = { (e) => setPassword(e.target.value) }
                                type={passwordType} 
                                className="block text-xs py-3 px-4 rounded-lg w-full border outline-purple-500"
                                />
                                <div class="absolute inset-y-0 end-2 flex items-center ps-3 cursor-pointer hover:scale-105" onClick={togglePassword}>
                                { passwordType==="password"? <FaRegEye /> : <FaRegEyeSlash /> }
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button onClick = {(e) => loginWithUsernameAndPassword(e)} className="w-full py-2 text-sm text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
                                Sign In
                            </button>
                            <p className="mt-4 text-xs">Copyright © {new Date().getFullYear()} <Link className="text-blue-800 font-medium" to={'/'} >Dats</Link>. All rights reserved.</p>
                        </div>
                    </form>
                </div>
                <div className="w-40 h-40 absolute bg-[#b3b9c9] rounded-full top-0 right-12 hidden md:block " />
                <div className="w-20 h-40 absolute bg-[#b3b9c9] rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
            </div>


        </>
    )
}

export default Login;