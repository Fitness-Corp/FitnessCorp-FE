import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import LoginPopUp from "./LoginPopUp";

const initialForm = {
    username: '',
    password: '',
    email: ''
};


const RegistrationPopUp = ({ fetching, dispatch }) => {
    const [form, setForm] = useState(initialForm);
    const [logIn, setLogIn] = useState(false);

    const toggleLogIn = e => {
        e.preventDefault();
        setLogIn(!logIn);
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
        dispatch(register(form));
        // })
        // .catch(() => {
        // dispatch error message to wherever it goes
        // })
    };

    if (logIn) {
        return (
            <>
                <LoginPopUp />
            </>
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
        <div>
            <form>
                {/* <h3>{error.toUpperCase()}</h3> */}
                <div className="formItem">
                    <h3>REGISTER</h3>
                    <label htmlFor="username">Username *</label>
                    <input
                        onChange={handleChange}
                        value={form.username}
                        id='username'
                        name='username'
                        placeholder="Username"
                    />
                </div>
                <div className="formItem">
                    <label htmlFor="email">Email *</label>
                    <input
                        onChange={handleChange}
                        value={form.email}
                        id='email'
                        name='email'
                        type={'email'}
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
                    <button onClick={handleSubmit}>REGISTER</button>
                    <p>Already have an account?</p>
                    <button className="reg-sub" onClick={toggleLogIn}>LOG IN</button>
                </div>
            </form>
        </div>
    );
};

const mapState = (state) => {
    return {
        fetching: state.fetching
    };
};


export default connect(mapState)(RegistrationPopUp);