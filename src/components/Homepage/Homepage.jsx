import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useSelector } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBView, MDBSpinner } from 'mdbreact'
import { Link } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'
import axios from 'axios';
import { TweenMax, Power4, Power2, TimelineLite, Expo } from 'gsap';
import Navigation from './../Navigation/Navigation'

const Homepage = () => {
    const [trendingMovies, setTrendingMovies] = useState(false);
    const logo = useRef(null);
    const video = useRef(null);
    const container = useRef(null);
    const miniLogo = useRef(null);
    const homepage = useRef(null);
    const ratings = useRef(null);
    const search = useRef(null);
    const user = useRef(null);
    const log = useRef(null);
    const navigation={miniLogo, homepage, ratings, search, user, log}

    useFirestoreConnect('rating')

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
        console.log(logo.current);

    }, [])

    useEffect(() => {
        TweenMax.from(video.current, 1, {
            delay: 0,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from(container.current, 1, {
            width: "100%",
            ease: Expo.easeInOut
        });
    
        // Navigation
        TweenMax.from(navigation.miniLogo.current, 1, {
            delay: 1,
            opacity: 0,
            y: "100%",
            ease: Expo.easeInOut
        });
        TweenMax.from(navigation.homepage.current, 1, {
            delay: 1.25,
            opacity: 0,
            y: "100%",
            ease: Expo.easeInOut
        });
        TweenMax.from(navigation.ratings.current, 1, {
            delay: 1.5,
            opacity: 0,
            y: "100%",
            ease: Expo.easeInOut
        });
        TweenMax.from(navigation.search.current, 1, {
            delay: 1.75,
            opacity: 0,
            y: "100%",
            ease: Expo.easeInOut
        });
        TweenMax.from(navigation.user.current, 1, {
            delay: 2,
            opacity: 0,
            y: "100%",
            ease: Expo.easeInOut
        });
        TweenMax.from(navigation.log.current, 1, {
            delay: 2.25,
            opacity: 0,
            y: "100%",
            ease: Expo.easeInOut
        });

        TweenMax.from(logo.current, 1, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Power2.easeIn
        });

    }, [profile])

    return (
        <Fragment>
            {profile && profile.isLoaded && (
                <Fragment>
                    <div style={{position: 'absolute', left: '0%', width: '0%', height: '100%', backgroundColor: '#cddc39', zIndex: '600'}} ref={container}></div>
                    <Navigation ref={navigation}/>
                        <main style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <video ref={video} style={{objectFit: 'cover', width: '100%', height: '100vh '}} muted autoPlay playsinline loop>
                                <source src={require('./../../../styles/videos/old-movie-intro.mp4')} type="video/mp4"/>
                            </video>
                            <div style={{height: '100vh', width: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '200'}}>
                                <img ref={logo} src={require('./../../../styles/images/film-search-app-logo.png')} height="200" alt="Film search app logo" />
                            </div>
                        </main>
                    <MDBContainer fluid className="pt-4 pb-4">
                        <h1 className="text-center white-text font-weight-bold">TOP TRENDING MOVIES OF THE WEEK</h1>
                        <MDBRow>
                            {trendingMovies && trendingMovies.map((movie, index) => (
                                <MDBCol key={index} size="2" className="mt-2 mb-2">
                                    <Link to={`/movie/${movie.id}`}>
                                        <MDBCard style={{height: '100%', backgroundColor: 'inherit'}}>
                                            <MDBView hover zoom>
                                                <MDBCardImage className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} waves />
                                            </MDBView>
                                            <MDBCardBody style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <MDBCardTitle className="white-text">{movie.title}</MDBCardTitle>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </Link>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Homepage
