import React from 'react';

const AddTokenForm = (props) => {
    const { addedToken, allTokens } = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
            Choose token:
            <select name='addedToken' value={addedToken} onChange={props.handleSelectOnChange}>
                {allTokens.map((token) => (
                    <option 
                        value={token.tokenId}
                        key={token.tokenId}
                    >
                        {token.name}
                    </option>
                ))}
            </select>
            </label>
            <button>Add token</button>
        </form>
    )
};

export default AddTokenForm;