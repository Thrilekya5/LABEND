
import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function signup() {

        if (email === "" || password === "") {
            setMessage("Please enter all details");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existing = users.find(user => user.email === email);

        if (existing) {
            setMessage("User already exists!");
            return;
        }

        users.push({ email, password });

        localStorage.setItem("users", JSON.stringify(users));

        setMessage("Signup Successful! Please Login");
    }

    function login() {

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(
            u => u.email === email && u.password === password
        );

        if (user) {
            setMessage("Login Successfully!");
        } else {
            setMessage("Invalid Email or Password!");
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>

            <h1>Login Page</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={login}>Login</button>

            <button onClick={signup}>Sign Up</button>

            <h3>{message}</h3>

        </div>
    );
}

export default Login;
