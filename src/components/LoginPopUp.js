import React, { useState } from "react";
import { login } from "../actions";
import { connect } from "react-redux";
import RegistrationPopUp from "./RegistrationPopUp";

const initialForm = {
    username: '',
    password: '',
    email: ''
};


const LoginPopUp = ({ fetching, loggedIn, dispatch }) => {
    const [form, setForm] = useState(initialForm);
    const [register, setRegister] = useState(false);

    const toggleRegister = e => {
        e.preventDefault();
        setRegister(!register);
    };
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = e => {
        e.preventDefault();
        // .then(() => {
        dispatch(login(form));
        // })
        // .catch(() => {
        // dispatch error message to wherever it goes
        // })
    };
    if (loggedIn) {
        return null;
    }
    if (register) {
        return (
            <RegistrationPopUp />
        );
    }

    if (fetching) {
        return (
            <>
                <h3>Loading...</h3>
            </>
        );
    }
    return (
        <div className="log-in-form">
            <form>
                {/* <h3>{error.toUpperCase()}</h3> */}
                <div className="formItem">
                    <h3>LOG IN</h3>
                    <label htmlFor="username">Username or Email *</label>
                    <input
                        onChange={handleChange}
                        value={form.username}
                        id='username'
                        name='username'
                        placeholder="john@email.com"
                    />
                </div>
                <div className="formItem">
                    <label htmlFor="password">Password *</label>
                    <input
                        onChange={handleChange}
                        value={form.password}
                        id='password'
                        name='password'
                        type={'password'}
                        placeholder="Password"
                    />
                </div>
                <div className="formItem">
                    <button onClick={handleSubmit}>LOG IN</button>
                    <p>Need to create an account?</p>
                    <button className="reg-sub" onClick={toggleRegister}>REGISTER</button>
                </div>
            </form>
        </div>
    );
};

const mapState = (state) => {
    return {
        fetching: state.fetching,
        loggedIn: state.loggedIn,
    };
};

export default connect(mapState)(LoginPopUp);