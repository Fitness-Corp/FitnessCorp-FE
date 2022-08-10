import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../actions";
import { connect } from "react-redux";
import { register } from "../actions";

const initialForm = {
    username: '',
    password: '',
    email: ''
}


const RegistrationPopUp = ({ dispatch }) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });

    }

    const handleSubmit = e => {
        e.preventDefault()
        // .then(() => {
            dispatch(register(form))
        // })
        // .catch(() => {
            // dispatch error message to wherever it goes
        // })
    }

    return (
        <div>
        <form>
            {/* <h3>{error.toUpperCase()}</h3> */}
            <div className="formItem">
                <label htmlFor="username">User Name:</label>
                <input 
                    onChange={handleChange}
                    value={form.username}
                    id='username'
                    name='username'
                    placeholder="User Name"
                />
            </div>
            <div className="formItem">
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={handleChange}
                    value={form.email}
                    id='email'
                    name='email'
                    type={'email'}
                    placeholder="Email"
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
        </form>
        </div>
    )
}


export default connect()(RegistrationPopUp)