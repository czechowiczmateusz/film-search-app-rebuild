import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MDBBtn, MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBSpinner, MDBContainer } from 'mdbreact'
import { signIn } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import './../../../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const error = useSelector(
      state => state.auth.authError
    )

    const login = ({ email, password }) => dispatch(signIn({ email, password }));

    const loginHandler = event => {
        event.preventDefault();
        login({
            email: email,
            password: password
        })
    }

    useEffect(() => {
        document.body.style.backgroundImage = 'none';
    }, [])

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
                        <form>
                            <p className="h4 text-center py-4 white-text">Login</p>
                            <div className="grey-text">
                            <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                getValue={(value) => setEmail(value)}
                                className={error ? "is-invalid" : ""}
                            />
                            <MDBInput
                                label="Your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                                getValue={(value) => setPassword(value)}
                                className={error ? "is-invalid" : ""}
                            >
                            <div className="invalid-feedback">Your email and password don't match</div>
                            </MDBInput>
                            </div>
                            <div className="text-center py-4 mt-3">
                            <MDBBtn
                                color="lime"
                                type="submit"
                                onClick={loginHandler}
                            >
                                Login
                            </MDBBtn>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link to="/register">
                                <MDBBtn
                                    color="lime"
                                    type="submit"
                                >
                                    Create your account
                                </MDBBtn>
                            </Link>
                        </div>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default Login