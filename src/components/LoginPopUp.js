import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../actions";
import { connect } from "react-redux";
import RegistrationPopUp from "./RegistrationPopUp";

const initialForm = {
    username: '',
    password: '',
    email: ''
}


const LoginPopUp = ({ fetching, loggedIn, dispatch }) => {
    const [form, setForm] = useState(initialForm)
    const [register, setRegister] = useState(false)

    const toggleRegister = e => {
        e.preventDefault()
        setRegister(!register)
    }
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });

    }

    const handleSubmit = e => {
        e.preventDefault()
        // .then(() => {
            dispatch(login(form))
        // })
        // .catch(() => {
            // dispatch error message to wherever it goes
        // })
    }
        if(loggedIn) {
            return null
        }
        if(register) {
            return (
                <RegistrationPopUp/>
            )
        }

        if(fetching) {
            return (
                <>
                 <h3>Loading...</h3>
                </>
            )
        }
    return (
        <div>
        <form>
            {/* <h3>{error.toUpperCase()}</h3> */}
            <div className="formItem">
                <label htmlFor="username">User Name or Email:</label>
                <input 
                    onChange={handleChange}
                    value={form.username}
                    id='username'
                    name='username'
                    placeholder="User Name"
                />
            </div>
            <div className="formItem">
                <label htmlFor="password">Password:</label>
                <input 
                    onChange={handleChange}
                    value={form.password}
                    id='password'
                    name='password'
                    type={'password'}
                    placeholder="Password"
                />
            </div>
            <button onClick={handleSubmit}>Submit</button><br></br>
            <button onClick={toggleRegister}>Register here</button>
        </form> 
        </div>
    )
}

const mapState = (state) => {
    return {
        fetching: state.fetching,
        loggedIn: state.loggedIn,
    }
}

export default connect(mapState)(LoginPopUp)