import React from 'react';

class FilmInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: false,
            movieID: 411088,
            movies: false,
            display: "none"
        }
    }

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68&language=en-US`;
        fetch(url).then(resp => resp.json()).then((data) =>
            this.setState({
                response: data,
                title: data.original_title,
                overview: data.overview,
                vote: data.vote_average,
                poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                runtime: data.runtime,
                date: data.release_date,
                language: data.original_language,
                back: `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            }));
    }

    handleChange = (event) => {
        if(this.state.response && event.target.value.length > 1 && event.target.value.length < 15) {
            let url = `https://api.themoviedb.org/3/search/movie?query=%${event.target.value}&sort_by=popularity.desc&api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
            fetch(url).then(resp => resp.json()).then(data =>
                this.setState({
                    movies: data && data.results.length ? data.results : null,
                    movie1: data.results[0] ? data.results[0].title : null,
                    poster1: data.results[0] ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : null,
                    movie2: data.results[1] ? data.results[1].title : null,
                    poster2: data.results[1] ? `https://image.tmdb.org/t/p/w500${data.results[1].poster_path}` : null,
                    movie3: data.results[2] ? data.results[2].title : null,
                    poster3: data.results[2] ? `https://image.tmdb.org/t/p/w500${data.results[2].poster_path}` : null,
                    movie4: data.results[3] ? data.results[3].title : null,
                    poster4: data.results[3] ? `https://image.tmdb.org/t/p/w500${data.results[3].poster_path}` : null,
                    movie5: data.results[4] ? data.results[4].title : null,
                    poster5: data.results[4] ? `https://image.tmdb.org/t/p/w500${data.results[4].poster_path}` : null,
                    display: data.results[0] ? "block" : "none"
                }));
        } else if(event.target.value.length <= 1) {
            this.setState({
                display: "none"
            });
        } else {
            this.setState({
                display: "none"
            })
        }
    };

    fetchNewMovie(movieID) {
        if (this.state.movies) {
            let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
            fetch(url).then(resp => resp.json()).then(data =>
                this.setState({
                    movieID,
                    title: data.original_title,
                    overview: data.overview,
                    vote: data.vote_average,
                    poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    runtime: data.runtime,
                    date: data.release_date,
                    language: data.original_language,
                    back: `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                })
            );
        }
    }

    changeTitle(movieID) {
        if(this.state.movies) {
            let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
            fetch(url).then(resp => resp.json()).then(data => {
                document.title = data.original_title
            })
        }
    }

    handleClick = (id) => {
        let movies = this.state.movies;
        this.fetchNewMovie(movies[id].id);
        this.changeTitle(movies[id].id);
        this.setState({
            display: "none"
        })
    };

    render() {
        screen.width < 800 ? document.body.style.backgroundColor = '#080C12' : document.body.style.backgroundImage = `url(${this.state.back})`;
        if (this.state.response) {
            return (
                <div>
                    <header className="col-xl-12 row">
                        <form className="input-group col-xl-12" onSubmit={this.handleClick}>
                            <input onChange={this.handleChange} placeholder="Search Movie Title in English..."
                                   className="form-control col-12"/>
                        </form>
                    </header>
                    <div className="col-xl-12 typeahead row" style={{display: this.state.display}}>
                        <div className="col-xl-12 row" onClick={() => this.handleClick(0)}>
                            <img className="col-1" src={this.state.poster1}/>
                            <p className="col-6">{this.state.movie1}</p>
                        </div>
                        <div className="col-xl-12 row" onClick={() => this.handleClick(1)}>
                            <img className="col-1" src={this.state.poster2}/>
                            <p className="col-6">{this.state.movie2}</p>
                        </div>
                        <div className="col-xl-12 row" onClick={() => this.handleClick(2)}>
                            <img className="col-1" src={this.state.poster3}/>
                            <p className="col-6">{this.state.movie3}</p>
                        </div>
                        <div className="col-xl-12 row" onClick={() => this.handleClick(3)}>
                            <img className="col-1" src={this.state.poster4}/>
                            <p className="col-6">{this.state.movie4}</p>
                        </div>
                        <div className="col-xl-12 row" onClick={() => this.handleClick(4)}>
                            <img className="col-1" src={this.state.poster5}/>
                            <p className="col-6">{this.state.movie5}</p>
                        </div>
                    </div>
                    <div className="row main col-xl-12">
                        <div key={this.state.movieID} className="image row col-xl-6">
                            <img src={this.state.poster}/>
                        </div>
                        <div className="col-xl-6 col-md-12" style={{after: {content: 'witam'}}}>
                            <h3 className="col-xl-12">{this.state.title}</h3>
                            <p className="col-xl-12 overview">{this.state.overview}</p>
                            <div className="row col-xl-12">
                                <p className="col-xl-6 smaller">Release date: </p>
                                <p className="col-xl-6 info">{this.state.date}</p>

                            </div>
                            <div className="row col-xl-12">
                                <p className="col-xl-6 smaller">Vote Average: </p>
                                <p className="col-xl-6 info">{this.state.vote}/10</p>
                            </div>
                            <div className="row col-xl-12">
                                <p className="col-xl-6 smaller">Runtime: </p>
                                <p className="col-xl-6 info">{this.state.runtime} mins</p>
                            </div>
                            <div className="row col-xl-12">
                                <p className="col-xl-6 smaller">Original language: </p>
                                <p className="col-xl-6 info">{this.state.language}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default FilmInfo
