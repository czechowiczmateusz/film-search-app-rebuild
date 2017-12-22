import React from 'react';

class FilmInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieID: 106646,
            movies: false,
            placeholder: " "
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
        fetch(url).then(resp => resp.json()).then(data => this.setState({movies: data.results}))
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

    handleClick = (event) => {
        event.preventDefault();
        if(!this.state.movies){
            let movies = this.state.movies;
            this.fetchNewMovie(movies[0].id);
            this.setState({
                placeholder: " "
            })
        } else {
            this.setState({
                placeholder: "Not found"
            })
        }
    };

    render(){
        if(this.state.movieID) {
            return (
                <div>
                    <header className="col-xl-12 row">
                    <form className="input-group" onSubmit={this.handleClick}>
                        <input onChange={this.handleChange} placeholder="Search Movie Title..." className="form-control col-10"/>
                        <button onClick={this.handleClick} type="button" className="btn btn-dark col-2">Search</button>
                    </form>
                        <p>{this.state.placeholder}</p>
                    </header>
                    <div className="row main col-xl-12">
                        <div key={this.state.movieID} className="row col-xl-6">
                            <img src={this.state.poster}/>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <h3 className="col-xl-12">{this.state.title}</h3>
                            <p className="col-xl-12 overview">{this.state.overview}</p>
                        <div className="row col-xl-12">
                            <p className="col-xl-6 smaller">Release date: </p>
                            <p className="col-xl-6 smaller">Vote Average: </p>
                        </div>
                        <div className="row col-xl-12">
                            <p className="col-xl-6 info">{this.state.date}</p>
                            <p className="col-xl-6 info">{this.state.vote}/10</p>
                        </div>
                        <div className="row col-xl-12">
                            <p className="col-xl-6 smaller">Runtime: </p>
                            <p className="col-xl-6 smaller">Original language: </p>
                        </div>
                        <div className="row col-xl-12">
                            <p className="col-xl-6 info">{this.state.runtime} mins</p>
                            <p className="col-xl-6 info">{this.state.language}</p>
                        </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default FilmInfo
