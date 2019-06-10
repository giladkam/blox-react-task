import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authentication from './components/authentication/authentication';
import CryptoWatchlist from './components/cryptoWatchlist/cryptoWatchlist';
  
const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component ={Authentication} exact={true}/> 
            <Route path="/watchlist" component ={CryptoWatchlist}/> 
        </Switch>
    </BrowserRouter>
)

export default AppRouter;