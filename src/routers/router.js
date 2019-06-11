import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Authentication from '../components/authentication/authentication';
import CryptoWatchlist from '../components/cryptoWatchlist/cryptoWatchlist';
import PrivateRoute from '../routers/privateRoute';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component ={Authentication} /> 
            <PrivateRoute path="/watchlist" component ={CryptoWatchlist} /> 
            <Redirect from="/" to={localStorage.getItem('credentials')? "/watchlist": "/login"} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;