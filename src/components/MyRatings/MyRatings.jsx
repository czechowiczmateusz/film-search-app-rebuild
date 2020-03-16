import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBView, MDBMask } from 'mdbreact'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import Navigation from './../Navigation/Navigation'
import Rating from 'material-ui-rating'
import { updateRating } from '../../store/actions/ratingActions'

const MyRatings = () => {
    const [myMovies, setMyMovies] = useState([]);
    const [vote, setVote] = useState(null);

    useFirestoreConnect('rating')

    const profileEmail = useSelector(state => state.firebase.profile.email)

    const rating = useSelector(state => state.firestore.data.rating);

    let location = useLocation();

    useEffect(() => {
        document.body.style.backgroundImage = 'none';
        document.title = 'Film-search-app';
    }, [])

    console.log(myMovies);

    useEffect(() => {
        if(profileEmail && rating && rating[profileEmail]) {
            const objectMap = (obj, fn) => {
                Object.fromEntries(
                    Object.entries(obj).map(
                    ([k, v], i) => [k, fn(v, k, i)]
                    )
                )
            }
            objectMap(rating[profileEmail], v => setMyMovies(prevArray => [...prevArray, v]))
        }
    }, [profileEmail, location.pathname])

    return (
        <Fragment>
            <Navigation/>
            <MDBContainer fluid className="mt-5 pt-5 pb-4">
                <h1 className="text-center white-text font-weight-bold">MY RATINGS</h1>
                <MDBCard style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}} className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        {myMovies && myMovies.map((movie, index) => (
                            <Fragment key={index}>
                                <MDBRow>
                                    <MDBCol lg="2">
                                        <Link to={`/movie/${movie.id}`}>
                                            <MDBView hover zoom>
                                                <MDBCardImage className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} waves />
                                            </MDBView>
                                        </Link>
                                    </MDBCol>
                                    <MDBCol lg="10" className="pt-2">
                                        <Link to={`/movie/${movie.id}`}>
                                            <h3 className="font-weight-bold mb-3 p-0 white-text">
                                                <strong>{movie.title} ({movie.year})</strong>
                                            </h3>
                                            <h4 className="white-text">My vote:</h4>
                                            <Rating
                                                name="read-only"
                                                readOnly
                                                value={movie.vote}
                                                max={10}
                                            />
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" style={{backgroundColor: '#fff'}} />
                            </Fragment>
                        ))}
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </Fragment>
    );
};

export default MyRatings
