import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios';
import { MDBInput, MDBSelectInput, MDBSelect, MDBSelectOptions, MDBSelectOption, MDBNav, MDBNavItem, MDBNavLink, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'
import { Link } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import './../../../styles/Navigation.css'

const Navigation = React.forwardRef((props, ref) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);
    const { miniLogo, homepage, ratings, search, user, log } = ref;

    const dispatch = useDispatch();

    const logout = () => dispatch(signOut());

    const profile = useSelector(state => state.firebase.profile);

    useEffect(() => {
        if(query.length > 0) {
            axios.get(`/search/movie?api_key=dc10a74e3b456f7ea1ca583b9da65d68&query=${query}`).then(({ data }) => setResults(data.results.slice(0, 5)))
        } else {
            setResults(null)
        }
    }, [query])

    return (
        <div>
            <MDBNavbar scrolling transparent={props.color ? false : true} fixed="top" style={{zIndex: '300', marginBotom: '50px'}} color="black" dark expand="md">
                <MDBNavbarBrand>
                    <img ref={miniLogo} src={require('./../../../styles/images/film-search-app-logo-mini.png')} height="60" alt="Film search app logo" />
                </MDBNavbarBrand>
                <MDBCollapse isOpen={true} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <div ref={homepage}>
                                <MDBNavLink to="/homepage">
                                    HOMEPAGE
                                </MDBNavLink>
                            </div>
                        </MDBNavItem>
                        <MDBNavItem>
                            <div ref={ratings}>
                                <MDBNavLink to="/my-ratings">
                                    MY RATINGS
                                </MDBNavLink>
                            </div>
                        </MDBNavItem>
                        <MDBNavItem className="nav__search">
                            <div ref={search}>
                                <MDBInput className="input__search" hint="Search movie title..." value={query} onChange={() => setQuery(event.target.value)} type="text"/>
                                {results && results.length > 0 && <MDBSelect
                                    getValue={(value) => value && setQuery('')}
                                    className="results__dropdown"
                                    >
                                    <MDBSelectInput/>
                                    <MDBSelectOptions className="results__open">
                                        {results && results.map((value, index) => <Link key={index} to={`/movie/${value.id}`}><MDBSelectOption value={value.title} key={index} icon={value.poster_path ? `https://image.tmdb.org/t/p/w500${value.poster_path}` : null}>{value.title}</MDBSelectOption></Link>) }
                                    </MDBSelectOptions>
                                </MDBSelect>}
                            </div>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavbarBrand>
                            <strong ref={user} className="lime-text">{profile.username}</strong>
                        </MDBNavbarBrand>
                        <MDBNavItem onClick={logout}>
                            <div ref={log}>
                                <MDBNavLink to="/login">
                                    <MDBIcon className="pr-2" icon="sign-out-alt" />
                                    LOGOUT
                                </MDBNavLink>
                            </div>
                        </MDBNavItem> 
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    )
    }
)

export default Navigation