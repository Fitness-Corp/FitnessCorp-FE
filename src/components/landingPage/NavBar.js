import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {



    return (
        <div>
            <Link to= '/classes'>Classes</Link><Link to= './about'>About</Link><Link to= '/mebership'>Membership</Link><Link to= '/contact'>Contact</Link><button>Login</button>
        </div>
    )
}


export default NavBar