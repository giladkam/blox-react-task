import React from 'react';
import { connect } from 'react-redux';
import { fetchUserTokens,
         removeToken,
         fetchAllTokens,
         handleSelectOnChange,
         addToken 
} from '../../actions/cryptoWatchlist';
import { updateAuthenticationToken } from '../../actions/general';     
import AddTokenForm from './addToken';
import LogoutButton from '../buttons/logout';
import './cryptoWatchlist.css';

class CryptoWatchlist extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateAuthenticationToken(localStorage.getItem('credentials'));
    }

    componentDidMount() {
        const authToken =  this.props.authentication.token || localStorage.getItem('credentials');
        this.fetchData(authToken);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    fetchData(authToken) {
        if(authToken) {
            this.interval = setInterval(() => {
                this.props.fetchUserTokens(authToken);
           }, 50000);
           this.props.fetchUserTokens(authToken);
           this.props.fetchAllTokens(authToken);
        }
    }

    render () {
        const { tokens, tokensIdList, allTokens, addedToken } = this.props.cryptoWatchlist;
        const authToken = this.props.authentication.token;
        return (
           <div className="crypto-watchlist">
               <div className="crypto-watchlist__user-coin">
                {tokens.map((token) => (
                    <div key={token.tokenId} className="coin-card">
                        <img className="coin-card__icon" src={token.icon} alt={token.name} />
                        <div className="coin-card__name text-align-center">{token.name}</div>
                        <div className="coin-card__price text-align-center">{token.price}</div>
                        <button 
                            className="coin-card__remove-btn"
                            onClick={(event) => this.props.removeToken(event, token.tokenId, tokensIdList,authToken)}>
                                Remove coin
                            </button>
                    </div>
                ))}
               </div>

                <div className={'add-coin'}>
                  { allTokens &&
                    <AddTokenForm 
                        addedToken={addedToken}
                        allTokens={allTokens}
                        handleSubmit={(e) => this.props.addToken(e,addedToken,tokensIdList,authToken)}
                        handleSelectOnChange={this.props.handleSelectOnChange}
                    />
                    }
                </div>
              <LogoutButton />
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoWatchlist: state.cryptoWatchlist,
        authentication: state.authenticationReducer
        }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAuthenticationToken: (authToken) => updateAuthenticationToken(dispatch,authToken), 
        fetchUserTokens: (authToken) => fetchUserTokens(dispatch, authToken),
        removeToken: (event, removedTokenId, tokensIdList, authToken) => removeToken(dispatch,event,authToken, removedTokenId, tokensIdList),
        fetchAllTokens: (authToken) => fetchAllTokens(dispatch, authToken),
        handleSelectOnChange: (event) => handleSelectOnChange(dispatch,event),
        addToken: (event, addedToken, tokensIdList, authToken) => addToken(dispatch,event,authToken,addedToken, tokensIdList)
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CryptoWatchlist)