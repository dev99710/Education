import '../styles/signup.css'; // Import the CSS file for signup page
import React, { useState } from "react";
// import './signup.css';
import { Link } from "react-router-dom";
import { auth } from '../firebaseConfig';  // Use named import
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            if (user) {
                alert("Account Created");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="auth-container">
            <div>
                <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <p>Already Have an Account? <Link to="/login">Login Now</Link></p>
            <button onClick={submit}>Signup</button>
        </div>
    );
}
