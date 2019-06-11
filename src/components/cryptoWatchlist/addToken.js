import React from 'react';

const AddTokenForm = (props) => {
    const { addedToken, allTokens } = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Add coin</h3>
            <label>
            Choose token: 
            <select name="addedToken" value={addedToken} onChange={props.handleSelectOnChange}>
                <option value=''></option>
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
            <button className="add-coin_button">Add token</button>
        </form>
    )
};

export default AddTokenForm;