import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";
import { logout } from "../../actions";



const NavBar = ({ loggedIn, dispatch }) => {

    const toggleLoginButton = () => {
        dispatch(toggleLogin())
    }
    const logOut = () => {
        dispatch(logout())
    }
    // useEffect(() => {

    // }, [loggedIn])
    return (
        <div>
            <Link to= '/classes'>Classes</Link><Link to= './about'>About</Link><Link to= '/mebership'>Membership</Link><Link to= '/contact'>Contact</Link><button onClick={toggleLoginButton}>Login</button>{loggedIn ? <button onClick={logOut}>Log Out</button> : null}
        </div>
    )
}


const mapState = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(NavBar)