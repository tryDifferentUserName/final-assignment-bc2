import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import ValidateData from './ValidateData'
import '../Assets/css/Form.css'


function RegisterForm({ submitForm }) {
    const { handleChange, values, handleSubmit, errors }
        = useForm(
            submitForm,
            ValidateData
        );
    return (
        <div className="form-content">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Welcome. Signup for your account and wine experience. Already have an account?
                     <br /><Link to="/"> Log in here</Link></h1>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Your email..."
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Your password..."
                        value={values.password}
                        onChange={handleChange} />

                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm password
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm password..."
                        value={values.password2}
                        onChange={handleChange} />

                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="fName" className="form-label">
                        First name
                    </label>
                    <input
                        id="fName"
                        type="text"
                        name="fName"
                        className="form-input"
                        placeholder="Your first name..."
                        value={values.fName}
                        onChange={handleChange} />
                    {errors.fname && <p>{errors.fname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="lName" className="form-label">
                        Last name
                    </label>
                    <input
                        id="lName"
                        type="text"
                        name="lName"
                        className="form-input"
                        placeholder="Your last name..."
                        value={values.lName}
                        onChange={handleChange} />
                </div>
                <div className="form-inputs">

                    <select name="country" id='country' className="form-input"
                        value={values.country}
                        onChange={handleChange} >
                        <option value="" disabled>Select your country</option>
                        <option value="LV">Latvia</option>
                        <option value="EE">Estonia</option>
                        <option value="LT">Lithuania</option>
                    </select>
                    {errors.country && <p>{errors.country}</p>}
                </div>
                <div className="form-inputs">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value={values.terms}
                        onChange={handleChange} />
                    <label htmlFor="terms" className="form-label"> Agree with terms and conditions</label>
                    {errors.terms && <p>{errors.terms}</p>}
                </div>
                <button className="form-input-btn" type="submit">Register </button>
            </form>
        </div>
    )
}
export default RegisterForm;