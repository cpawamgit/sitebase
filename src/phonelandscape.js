import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useLocation,
    useParams
} from "react-router-dom";

function PhoneLandscape() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>Hi, your are on a phone, in landscape mode</h1>
            <h1>HomePage</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>This website is cool !</h1>
            <ul>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </ul>
        </div>
    );
}

export default PhoneLandscape;