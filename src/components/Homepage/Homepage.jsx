import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBView, MDBSpinner } from 'mdbreact'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navigation from './../Navigation/Navigation'

const Homepage = () => {
    const [trendingMovies, setTrendingMovies] = useState(false);

    const API_KEY = useSelector(
        state => state.auth.API_KEY
    )

    const profile = useSelector(state => state.firebase.profile)

    const getTrending = () => {
        axios.get(`/trending/movie/week?api_key=${API_KEY}`).then(resp => {setTrendingMovies(resp.data.results.slice(0, 18)); console.log(resp.data.results)})
    }

    useEffect(() => {
        getTrending();
        document.body.style.backgroundImage = 'none';
        document.title = 'Film-search-app';
    }, [])

    return (
        <Fragment>
            {profile && profile.isLoaded ? (
                <Fragment>
                    <Navigation/>
                    {trendingMovies && <div className="mt-5" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${trendingMovies[0].backdrop_path}")`, height: '65vh', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>}
                    <MDBContainer fluid className="pt-4 pb-4">
                        <h1 className="text-center black-text font-weight-bold">TOP TRENDING MOVIES OF THE WEEK</h1>
                        <MDBRow>
                            {trendingMovies && trendingMovies.map((movie, index) => (
                                <MDBCol key={index} size="2" className="mt-2 mb-2">
                                    <Link to={`/movie/${movie.id}`}>
                                        <MDBCard style={{height: '100%', backgroundColor: 'inherit'}}>
                                            <MDBView hover zoom>
                                                <MDBCardImage className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} waves />
                                            </MDBView>
                                            <MDBCardBody style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <MDBCardTitle className="black-text">{movie.title}</MDBCardTitle>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </Link>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer>
                </Fragment>
            ) : (
                <MDBContainer className="container__init">
                    <MDBSpinner big/>
                </MDBContainer>
            )}
        </Fragment>
    );
};

export default Homepage
