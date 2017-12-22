import React from "react";
import ReactDOM from "react-dom";
require('.././styles/style.scss');
import Footer from './components/Footer/';
import FilmInfo from './components/FilmInfo/';

class App extends React.Component {
    render(){
        return <div className="container">
                <FilmInfo></FilmInfo>
                <Footer></Footer>
                </div>

    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});