import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBView, MDBMask, MDBRating } from 'mdbreact'
import { useParams, Link } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'
import axios from 'axios';
import Navigation from './../Navigation/Navigation'
import Rating from 'material-ui-rating'
import { updateRating } from '../../store/actions/ratingActions'

const FilmInfo = () => {
    const [movieData, setMovieData] = useState(false);
    const [similarMovies, setSimilarMovies] = useState(false);
    const [vote, setVote] = useState(null);

    const { movieID } = useParams();

    const dispatch = useDispatch();

    useFirestoreConnect('rating')

    const API_KEY = useSelector(state => state.auth.API_KEY)

    const profileEmail = useSelector(state => state.firebase.profile.email)

    const rating = useSelector(state => state.firestore.data.rating);

    const addRating = ({ email, id, title, poster_path, vote, vote_average, year }) => dispatch(updateRating({ email, id, title, poster_path, vote, vote_average, year }));

    const getMovieData = () => {
        axios.get(`/movie/${movieID}?api_key=${API_KEY}`).then(resp => {
            console.log(resp.data);
            document.title = resp.data.title;
            screen.width < 800 ? document.body.style.backgroundColor = '#080C12' : document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${resp.data.backdrop_path})`;
            setMovieData(resp.data);
        })
    }

    const getSimilarMovies = () => {
        axios.get(`/movie/${movieID}/similar?api_key=${API_KEY}`).then(resp => setSimilarMovies(resp.data.results.slice(0, 6)))
    }

    useEffect(() => {
        movieData && addRating({
            email: profileEmail,
            id: movieData.id.toString(),
            title: movieData.title,
            poster_path: movieData.poster_path,
            vote: vote,
            vote_average: movieData.vote_average,
            year: movieData.release_date.substring(0, 4)
        })
    }, [vote])

    useEffect(() => {
        if(profileEmail && rating && rating[profileEmail] && rating[profileEmail][movieID] && rating[profileEmail][movieID].vote) {
            setVote(rating[profileEmail][movieID].vote);
        }
    }, [profileEmail])
    
    useEffect(() => {
        getMovieData();
        getSimilarMovies();
    }, [movieID]);

    return (
        <Fragment>
            <Navigation color/>
            <MDBContainer className="pt-4 pb-4 mb-5" style={{marginTop: 'calc(3rem + 94px)', backgroundColor: 'rgba(0, 0, 0, 0.6)', fontFamily: "'Palanquin', sans-serif"}}>
                <MDBRow>
                    <MDBCol>
                        {movieData.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} className="img-fluid" alt={movieData.title} /> : null}
                    </MDBCol>
                    <MDBCol className="mt-4">
                        <h1 className="white-text ont-weight-bold">{movieData.title}</h1>
                        <p className="lime-text">{movieData.tagline}</p>
                        <h3 className="white-text">{movieData.vote_average}/10</h3>
                        <Rating
                            name="simple-controlled"
                            value={vote ? vote : 0}
                            max={10}
                            onChange={(value) => setVote(value)}
                        />
                        <p className="grey-text">{movieData.overview}</p>
                        <MDBRow className="mt-2">
                            <MDBCol><h4 className="lime-text">release date</h4></MDBCol>
                            <MDBCol><h4 className="white-text">{movieData.release_date}</h4></MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-2">
                            <MDBCol><h4 className="lime-text">original language</h4></MDBCol>
                            <MDBCol><h4 className="white-text">{movieData.original_language}</h4></MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-2">
                            <MDBCol><h4 className="lime-text">production</h4></MDBCol>
                            <MDBCol><h4 className="white-text">{movieData.production_countries && movieData.production_countries.map((country, index) => <span key={index}>{country.name} {index + 1 === movieData.production_countries.length ? '' : <span className="lime-text"> / </span>}</span>)}</h4></MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-2">
                            <MDBCol><h4 className="lime-text">status</h4></MDBCol>
                            <MDBCol><h4 className="white-text">{movieData.status}</h4></MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-2">
                            <MDBCol><h4 className="lime-text">genres</h4></MDBCol>
                            <MDBCol><h4 className="white-text">{movieData.genres && movieData.genres.map((genre, index) => <span key={index}>{genre.name} {index + 1 === movieData.genres.length ? '' : <span className="lime-text"> / </span>}</span>)}</h4></MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <h4 className="white-text mt-4 mb-4">Similar movies:</h4>
                <MDBRow>
                    {similarMovies && similarMovies.map((movie, index) => (
                        <MDBCol key={index} lg="4 mt-2 mb-2">
                            <Link to={`/movie/${movie.id}`}>
                                <MDBView hover>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                        className="img-fluid"
                                        alt={movie.title}
                                    />
                                    <MDBMask style={{cursor: 'pointer'}} className="flex-center" overlay="lime-strong">
                                        <h3 className="white-text text-center">{movie.title}</h3>
                                    </MDBMask>
                                </MDBView>
                            </Link>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </Fragment>
    );
};

export default FilmInfo
