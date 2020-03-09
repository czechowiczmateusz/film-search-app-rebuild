import React, { Fragment, useEffect } from 'react'
import { MDBContainer, MDBSpinner } from 'mdbreact'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import FilmInfo from './components/FilmInfo/FilmInfo'
import Homepage from './components/Homepage/Homepage'
import MyRatings from './components/MyRatings/MyRatings'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { useSelector } from 'react-redux'
import './../styles/App.css'

import { reactReduxFirebase, getFirebase, firebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase'

const App = () => {
    const auth = useSelector(
        state => state.firebase.auth
    );

    let location = useLocation();

    useEffect(() => {
        try {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } catch (error) {
            window.scrollTo(0, 0);
          }
    }, [location.pathname])

    return  (
        <Fragment>
            {auth && auth.isLoaded ? (
                auth.uid ? (
                    <Switch>
                        <Route path='/movie/:movieID' component={FilmInfo}/>
                        <Route path='/my-ratings' component={MyRatings}/>
                        <Route path='/homepage' render={() => <Homepage/>}/>
                        <Route render={() => <Redirect to='/homepage'/>} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Redirect to="/login" />
                    </Switch>
                )
            ) : (
                <MDBContainer className="container__init">
                    <MDBSpinner big/>
                </MDBContainer>
            )}
        </Fragment>   
    )
};

export default App;