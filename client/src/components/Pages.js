import React, {useState} from "react";
import LogInForm from "./Auth/LogInForm";
import SignUpForm from "./Auth/SignUpForm";


function Pages({onLogin}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <>
            <div>Reciplease</div>
            {showLogin ? (
                <>
                    <LogInForm onLogin={onLogin} />
                    <p>
                         Don't have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(false)}>
                        Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <p>
                        Already have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(true)}>
                        Log In
                        </button>
                    </p>
                </>
            )}
        </>
    )
}

export default Pages;