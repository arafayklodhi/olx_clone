import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home'
import Contact from '../Contact'

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path ='/' component= {Home} />
                <Route path ='/contact' component= {Contact} />
            </Router>
        )
    }
}