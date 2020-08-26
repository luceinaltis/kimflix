import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch, BrowserRouter} from "react-router-dom";

import Home from "../Routes/Home"
import TV from "../Routes/TV"
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

import Header from './Header';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/kimflix/" exact component={ Home } />
                <Route path="/kimflix/tv" exact component={ TV } />
                <Route path="/kimflix/search" exact component={ Search } />
                <Route path="/kimflix/movie/:id" exact component={ Detail } />
                <Route path="/kimflix/show/:id" exact component={ Detail } />
                <Redirect from="*" to="/kimflix/" />
            </Switch>
        </>
    </Router>
);