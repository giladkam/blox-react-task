import React from 'react';
import { connect } from 'react-redux';
import { fetchUserTokens, removeToken, fetchAllTokens, handleSelectOnChange, addToken } from '../../actions/cryptoWatchlist';
import AddTokenForm from './addToken';
import './cryptoWatchlist.css';

class CryptoWatchlist extends React.Component {

    componentDidMount() {
        const credentials = localStorage.getItem('credentials');
        if(credentials) {
            this.interval = setInterval(() => {
                this.props.fetchUserTokens(credentials);
           }, 50000);
           this.props.fetchUserTokens(credentials);
           this.props.fetchAllTokens(credentials);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render () {
        const { tokens, tokensIdList, allTokens, addedToken } = this.props.cryptoWatchlist;
        return (
           <div className="crypto-watchlist">
               {tokens.map((token) => (
                   <div key={token.tokenId} className="coin-details">
                       <img className="coin-details__icon" src={token.icon} alt={token.name} />
                       <div className="coin-details__name">{token.name}</div>
                       <div className="coin-details__price">{token.price}</div>
                       <button onClick={(event) => this.props.removeToken(event, token.tokenId, tokensIdList)}>Remove coin</button>
                   </div>
               ))}

                <div className={'add-token'}>
                  { allTokens &&
                    <AddTokenForm 
                        addedToken={addedToken}
                        allTokens={allTokens}
                        handleSubmit={(e) => this.props.addToken(e,addedToken,tokensIdList)}
                        handleSelectOnChange={this.props.handleSelectOnChange}
                    />
                    }
                </div>
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoWatchlist: state.cryptoWatchlist
        }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserTokens: (cerdentials) => fetchUserTokens(dispatch, cerdentials),
        removeToken: (event, removedTokenId, tokensIdList) => removeToken(dispatch,event,localStorage.getItem('credentials'), removedTokenId, tokensIdList),
        fetchAllTokens: (cerdentials) => fetchAllTokens(dispatch, cerdentials),
        handleSelectOnChange: (event) => handleSelectOnChange(dispatch,event),
        addToken: (event, addedToken, tokensIdList) => addToken(dispatch,event,localStorage.getItem('credentials'), addedToken, tokensIdList)
    }
    // Im taking the token from the local storage intsead from the redux store because i cant update the store and then redirect.
}

export default  connect(mapStateToProps, mapDispatchToProps)(CryptoWatchlist)