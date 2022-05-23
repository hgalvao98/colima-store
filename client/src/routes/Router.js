import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import AboutPage from '../pages/aboutpage/AboutPage';
import StorePage from '../pages/storepage/StorePage';
import Header from '../components/Header/Header';

const Router = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path ='/'>
                <HomePage/>
            </Route>
            <Route exact path ='/About'>
                <AboutPage/>
            </Route>
            <Route exact path ='/Store'>
                <StorePage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router