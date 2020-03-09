import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MDBBtn, MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBSpinner, MDBContainer } from 'mdbreact';
import { signUp } from '../../store/actions/authActions'
import './../../../styles/Login.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    const dispatch = useDispatch();

    const error = useSelector(
      state => state.auth.authError
    )

    const register = ({ email, password, firstName, lastName, username }) => dispatch(signUp({ email, password, firstName, lastName, username }));

    const validateFields = () => {
        let formIsValid = true;
        if(username.length < 6) {
            formIsValid = false;
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            formIsValid = false;
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if(password.length < 6) {
            formIsValid = false;
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        return formIsValid;
    }

    const registerHandler = event => {
        event.preventDefault();
        if(validateFields()) {
            register({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                username: username
            })
        }
    }

    return (
        <MDBContainer className="container__login">
            <MDBRow
                center
                style={{ height: '100%' }}
                className="justify-content-center align-content-center"
            >
                <MDBCol md="6">
                <MDBCard style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                    <MDBCardBody>
                        <form noValidate>
                            <p className="h4 text-center py-4 white-text">Register</p>
                            <div className="grey-text">
                            <MDBInput
                                label="Username"
                                icon="user"
                                group
                                type="text"
                                validate
                                required
                                error="wrong"
                                success="right"
                                getValue={(value) => setUsername(value)}
                                value={username}
                                className={usernameError ? "is-invalid" : ""}
                            >
                            <div className="invalid-feedback">
                                Username must contain at least 6 characters.
                            </div>
                            </MDBInput>
                            <MDBInput
                                label="Email address"
                                icon="envelope"
                                group
                                type="text"
                                validate
                                required
                                error="wrong"
                                success="right"
                                getValue={(value) => setEmail(value)}
                                value={email}
                                className={emailError ? "is-invalid" : ""}
                            >
                            <div className="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                            </MDBInput>
                            <MDBInput
                                label="Password"
                                icon="lock"
                                group
                                type="password"
                                validate
                                required
                                error="wrong"
                                success="right"
                                getValue={(value) => setPassword(value)}
                                value={password}
                                className={passwordError ? "is-invalid" : ""}
                            >
                            <div className="invalid-feedback">
                                Password must contain at least 6 characters.
                            </div>
                            </MDBInput>
                            <MDBInput
                                label="First name"
                                icon="user-tag"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                getValue={(value) => setFirstName(value)}
                                value={firstName}
                            />
                            <MDBInput
                                label="Last name"
                                icon="user-tag"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                getValue={(value) => setLastName(value)}
                                value={lastName}
                                className={error ? "is-invalid" : ""}
                            >
                                <div className="invalid-feedback">Something went wrong</div>
                            </MDBInput>
                            </div>
                            <div className="text-center py-4 mt-3">
                            <MDBBtn
                                color="lime"
                                type="submit"
                                onClick={registerHandler}
                            >
                                Register
                            </MDBBtn>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default Register