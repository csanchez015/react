import React, { useState } from "react";

const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastname, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
        if(event.target.value.length < 2) {
            setFirstNameError("First name must be at least 3 characters");
        }else {
            setFirstNameError("");
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
        if(event.target.value.length < 2) {
            setLastNameError("Last name must be at least 3 characters");
        }else {
            setLastNameError("");
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        if(event.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        }else {
            setEmailError("");
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if(event.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }else {
            setPasswordError("");
        }
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);
        if(password !== confirmpassword) {
            setConfirmPasswordError("Passwords must match!");
        }
    }


    return (
        <div>
            <form className="p-3 mx-auto border-dark my-3">
                <div className="mb-3 w-50 mx-auto" >
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="Search" onChange={firstNameHandler}/>
                    {firstNameError ? <p className="text-danger">{firstNameError}</p> : ''}
                </div>

                <div className="mb-3 w-50 mx-auto">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Search" onChange={lastNameHandler}/>
                    {lastNameError ? <p className="text-danger">{lastNameError}</p> : ''}
                </div>

                <div className="mb-3 w-50 mx-auto">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Search" onChange={emailHandler}/>
                    {emailError ? <p className="text-danger">{emailError}</p> : ''}
                </div>

                <div className="mb-3 w-50 mx-auto">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Search" onChange={passwordHandler} />
                    {passwordError ? <p className="text-danger">{passwordError}</p> : ''}
                </div>

                <div className="mb-3 w-50 mx-auto">
                    <label for="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Search" onChange={confirmPasswordHandler}/>
                    {confirmPasswordError ? <p className="text-danger">{confirmPasswordError}</p> : ''}
                </div>

            </form>
        </div>
    )
}

export default Form;