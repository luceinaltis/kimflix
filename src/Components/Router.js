import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

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
                <Route path="https://kimflix.github.io/kimflix/" exact component={ Home } />
                <Route path="https://kimflix.github.io/kimflix/tv" exact component={ TV } />
                <Route path="https://kimflix.github.io/kimflix/search" exact component={ Search } />
                <Route path="https://kimflix.github.io/kimflix/movie/:id" component={ Detail } />
                <Route path="https://kimflix.github.io/kimflix/show/:id" component={ Detail } />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);