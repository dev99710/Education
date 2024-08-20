import '../styles/login.css'; // Import the CSS file for login page
import React, { useState } from "react";
// import './login.css';
import { Link } from "react-router-dom";
import { auth } from '../firebaseConfig';  // Use named import
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            if (user) {
                alert("Login Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="auth-container">
            <div>
                <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <p>Don't Have an Account? <Link to="/signup">Create Account</Link></p>
            <button onClick={submit}>Login</button>
        </div>
    );
}
