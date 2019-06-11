import React, { useState, useEffect } from 'react';

const FilmInfo = () => {
    const [response, setResponse] = useState(false);
    const [movieID, setMovieID] = useState(411088);
    const [movies, setMovies] = useState(false);
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState(null);
    const [overview, setOverview] = useState(null);
    const [vote, setVote] = useState(null);
    const [poster, setPoster] = useState(null);
    const [runtime, setRuntime] = useState(null);
    const [date, setDate] = useState(null);
    const [language, setLanguage] = useState(null);
    const [back, setBack] = useState(null);
    const [movie1, setMovie1] = useState(null);
    const [movie2, setMovie2] = useState(null);
    const [movie3, setMovie3] = useState(null);
    const [movie4, setMovie4] = useState(null);
    const [movie5, setMovie5] = useState(null);
    const [poster1, setPoster1] = useState(null);
    const [poster2, setPoster2] = useState(null);
    const [poster3, setPoster3] = useState(null);
    const [poster4, setPoster4] = useState(null);
    const [poster5, setPoster5] = useState(null);

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68&language=en-US`;
        fetch(url).then(resp => resp.json()).then((data) => {
            setResponse(data);
            setTitle(data.original_title);
            setOverview(data.overview);
            setVote(data.vote_average);
            setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
            setRuntime(data.runtime);
            setDate(data.release_date);
            setLanguage(data.original_language);
            setBack(`https://image.tmdb.org/t/p/original${data.backdrop_path}`)
        });
    }, []);

    const handleChange = event => {
        if(response && event.target.value.length > 1 && event.target.value.length < 15) {
            let url = `https://api.themoviedb.org/3/search/movie?query=%${event.target.value}&sort_by=popularity.desc&api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
            fetch(url).then(resp => resp.json()).then(data => {
                setMovies(data);
                setMovie1(data.results[0] ? data.results[0].title : null);
                setPoster1(data.results[0] ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : null);
                setMovie2(data.results[1] ? data.results[1].title : null);
                setPoster2(data.results[1] ? `https://image.tmdb.org/t/p/w500${data.results[1].poster_path}` : null);
                setMovie3(data.results[2] ? data.results[2].title : null);
                setPoster3(data.results[2] ? `https://image.tmdb.org/t/p/w500${data.results[2].poster_path}` : null);
                setMovie4(data.results[3] ? data.results[3].title : null);
                setPoster4(data.results[3] ? `https://image.tmdb.org/t/p/w500${data.results[3].poster_path}` : null);
                setMovie5(data.results[4] ? data.results[4].title : null);
                setPoster5(data.results[4] ? `https://image.tmdb.org/t/p/w500${data.results[4].poster_path}` : null);
                setDisplay(!!data.results[0]);
            });
        } else if(event.target.value.length <= 1) {
            setDisplay(false);
        } else {
            setDisplay(false)
        }
    };

    const fetchNewMovie = movieID => {
        if (movies) {
            let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
            fetch(url).then(resp => resp.json()).then(data => {
                setMovieID(movieID);
                setTitle(data.original_title);
                setOverview(data.overview);
                setVote(data.vote_average);
                setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
                setRuntime(data.runtime);
                setDate(data.release_date);
                setLanguage(data.original_language);
                setBack(`https://image.tmdb.org/t/p/original${data.backdrop_path}`);
            });
        }
    };

    const changeTitle = movieID => {
        if(movies) {
            let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
            fetch(url).then(resp => resp.json()).then(data => {
                document.title = data.original_title
            })
        }
    };

    const handleClick = id => {
        let films = movies.results;
        fetchNewMovie(films[id].id);
        changeTitle(films[id].id);
        setDisplay(false);
    };
    screen.width < 800 ? document.body.style.backgroundColor = '#080C12' : document.body.style.backgroundImage = `url(${back})`;

    return (
        <div>
            <header className="col-xl-12 row">
                <form className="input-group col-xl-12" onSubmit={handleClick}>
                    <input onChange={handleChange} placeholder="Search Movie Title in English..."
                           className="form-control col-12"/>
                </form>
            </header>
            <div className="col-xl-12 typeahead row" style={{display: display ? "block" : "none"}}>
                <div className="col-xl-12 row" onClick={() => handleClick(0)}>
                    <img src={poster1}/>
                    <p className="col-6">{movie1}</p>
                </div>
                <div className="col-xl-12 row" onClick={() => handleClick(1)}>
                    <img src={poster2}/>
                    <p className="col-6">{movie2}</p>
                </div>
                <div className="col-xl-12 row" onClick={() => handleClick(2)}>
                    <img src={poster3}/>
                    <p className="col-6">{movie3}</p>
                </div>
                <div className="col-xl-12 row" onClick={() => handleClick(3)}>
                    <img src={poster4}/>
                    <p className="col-6">{movie4}</p>
                </div>
                <div className="col-xl-12 row" onClick={() => handleClick(4)}>
                    <img src={poster5}/>
                    <p className="col-6">{movie5}</p>
                </div>
            </div>
            <div className="row main col-xl-12">
                <div key={movieID} className="image row col-xl-6">
                    <img src={poster}/>
                </div>
                <div className="col-xl-6 col-md-12">
                    <h3 className="col-xl-12">{title}</h3>
                    <p className="col-xl-12 overview">{overview}</p>
                    <div className="row col-xl-12">
                        <p className="col-xl-6 smaller">Release date: </p>
                        <p className="col-xl-6 info">{date}</p>

                    </div>
                    <div className="row col-xl-12">
                        <p className="col-xl-6 smaller">Vote Average: </p>
                        <p className="col-xl-6 info">{vote}/10</p>
                    </div>
                    <div className="row col-xl-12">
                        <p className="col-xl-6 smaller">Runtime: </p>
                        <p className="col-xl-6 info">{runtime} mins</p>
                    </div>
                    <div className="row col-xl-12">
                        <p className="col-xl-6 smaller">Original language: </p>
                        <p className="col-xl-6 info">{language}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo
