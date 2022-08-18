import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";
import { logout } from "../../actions";
import axios from "axios";



const NavBar = ({ loggedIn, dispatch }) => {

    const toggleLoginButton = () => {
        dispatch(toggleLogin())
    }
    const logOut = () => {
        dispatch(logout())
    }
    useEffect(() => {
        if(!loggedIn && localStorage.getItem('login')){
            axios.post()
        }
    }, [])
    return (
        <div>
            <Link to= '/classes'>Classes</Link><Link to= './about'>About</Link><Link to= '/mebership'>Membership</Link><Link to= '/contact'>Contact</Link>{loggedIn ? <button onClick={logOut}>Log Out</button> : <button onClick={toggleLoginButton}>Login</button>}
        </div>
    )
}


const mapState = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(NavBar)