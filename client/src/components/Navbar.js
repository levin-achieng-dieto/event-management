import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({user, setUser}){
    function handleLogoutClick(){
        fetch("/logout", {method: "DELETE"}).then((response) => {
            if (response.ok){
                setUser(null);
            }
        })
    }

    return (
        <>
            <logo>
                <Link to="/">Nav bar</Link>
            </logo>
            <nav>
                <button>Home</button>
                <button>Contact</button>
                <button  onClick={handleLogoutClick}>
                     Logout
                </button>
            </nav>
        </>
    )
}
export default Navbar;