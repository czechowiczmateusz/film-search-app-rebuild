import React from "react";
import ReactDOM from "react-dom";
import * as styles from ".././styles/style.scss";
import Footer from './components/Footer/';
import FilmInfo from './components/FilmInfo/';

const App = () => {
    return  (
        <div className="container">
            <FilmInfo/>
            <Footer/>
        </div>
    )
};

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});