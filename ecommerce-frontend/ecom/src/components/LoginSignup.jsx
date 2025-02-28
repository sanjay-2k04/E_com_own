import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css"; // Make sure this file exists for styling

function LoginSignup() {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignup) {
            // Signup logic (send to backend)
            console.log("Signing up with:", { name, email, password });
            alert("Signup successful! Now login.");
            setIsSignup(false);
        } else {
            // Login logic (send to backend)
            console.log("Logging in with:", { email, password });
            alert("Login successful!");
            navigate("/");
        }
    };

    return (
        <div className="login-signup-container">
            <h2>{isSignup ? "Sign Up" : "Login"}</h2>
            <form onSubmit={handleSubmit}>
                {isSignup && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
            </form>
            <p onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </p>
        </div>
    );
}

export default LoginSignup;
