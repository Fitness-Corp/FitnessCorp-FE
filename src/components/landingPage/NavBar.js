import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";



const NavBar = ({ loginPop, dispatch }) => {

    const toggleLoginButton = () => {
        dispatch(toggleLogin())
        console.log(loginPop)
    }

    return (
        <div>
            <Link to= '/classes'>Classes</Link><Link to= './about'>About</Link><Link to= '/mebership'>Membership</Link><Link to= '/contact'>Contact</Link><button onClick={toggleLoginButton}>Login</button>
        </div>
    )
}

const mapState = state => {
    return {
        loginPop: state.loginPop
    }
}


export default connect(mapState)(NavBar)