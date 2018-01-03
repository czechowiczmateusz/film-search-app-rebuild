import React from 'react';

class FilmInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieID: 106646,
            movies: false,
            display: "none"
        }
    }

    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
        fetch(url).then(resp => resp.json()).then(data =>
            this.setState({
                title: data.original_title,
                overview: data.overview,
                vote: data.vote_average,
                poster:`https://image.tmdb.org/t/p/w500${data.poster_path}`,
                runtime: data.runtime,
                date: data.release_date,
                language: data.original_language
        }));
    }

    handleChange = (event) => {
        let url = `https://api.themoviedb.org/3/search/movie?query=%${event.target.value}&api_key=dc10a74e3b456f7ea1ca583b9da65d68`;
        fetch(url).then(resp => resp.json()).then(data =>
            this.setState({
                movies: data.results,
                movie1: data.results[0].title,
                poster1: `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`,
                movie2: data.results[1].title,
                poster2: `https://image.tmdb.org/t/p/w500${data.results[1].poster_path}`,
                movie3: data.results[2].title,
                poster3: `https://image.tmdb.org/t/p/w500${data.results[2].poster_path}`,
                movie4: data.results[3].title,
                poster4: `https://image.tmdb.org/t/p/w500${data.results[3].poster_path}`,
                movie5: data.results[4].title,
                poster5: `https://image.tmdb.org/t/p/w500${data.results[4].poster_path}`,
                display: "block"
            }))
    };

    fetchNewMovie(movieID) {
        if(this.state.movies) {
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
                }));
        }
    }

    handleClick1 = (event) => {
        if(this.state.movie1) {
            event.preventDefault();
            let movies = this.state.movies;
            this.fetchNewMovie(movies[0].id);
            this.setState({
                display: "none"
            })
        }
    };

    handleClick2 = (event) => {
        event.preventDefault();
        let movies = this.state.movies;
        this.fetchNewMovie(movies[1].id);
        this.setState({
            display: "none"
        })
    };

    handleClick3 = (event) => {
        event.preventDefault();
        let movies = this.state.movies;
        this.fetchNewMovie(movies[2].id);
        this.setState({
            display: "none"
        })
    };

    handleClick4 = (event) => {
        event.preventDefault();
        let movies = this.state.movies;
        this.fetchNewMovie(movies[3].id);
        this.setState({
            display: "none"
        })
    };

    handleClick5 = (event) => {
        event.preventDefault();
        let movies = this.state.movies;
        this.fetchNewMovie(movies[4].id);
        this.setState({
            display: "none"
        })
    };

    render(){
            return (
                <div>
                    <header className="col-xl-12 row">
                    <form className="input-group col-xl-12" onSubmit={this.handleClick}>
                        <input onChange={this.handleChange} placeholder="Search Movie Title..." className="form-control col-10"/>
                        <input type="submit" value="Search" className="btn btn-dark col-2"/>
                    </form>
                    </header>
                        <div className="col-xl-12 typeahead row" style={{display: this.state.display}}>
                            <div className="col-xl-12 row" onClick={this.handleClick1}>
                                <img className="col-1" src={this.state.poster1} />
                                <p className="col-6">{this.state.movie1}</p>
                            </div>
                            <div className="col-xl-12 row" onClick={this.handleClick2}>
                                <img className="col-1" src={this.state.poster2} />
                                <p className="col-6">{this.state.movie2}</p>
                            </div>
                            <div className="col-xl-12 row" onClick={this.handleClick3}>
                                <img className="col-1" src={this.state.poster3} />
                                <p className="col-6">{this.state.movie3}</p>
                            </div>
                            <div className="col-xl-12 row" onClick={this.handleClick4}>
                                <img className="col-1" src={this.state.poster4} />
                                <p className="col-6">{this.state.movie4}</p>
                            </div>
                            <div className="col-xl-12 row" onClick={this.handleClick5}>
                                <img className="col-1" src={this.state.poster5} />
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
    }
}

export default FilmInfo
