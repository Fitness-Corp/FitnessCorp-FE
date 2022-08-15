import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";



const NavBar = ({ dispatch }) => {

    const toggleLoginButton = () => {
        dispatch(toggleLogin());
    };

    return (
        <div>
            <Link to='/classes'>Classes</Link><Link to='./about'>About</Link><Link to='/mebership'>Membership</Link><Link to='/contact'>Contact</Link><button onClick={toggleLoginButton}>Login</button>
        </div>
    );
};




export default connect()(NavBar);