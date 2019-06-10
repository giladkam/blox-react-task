export const handleInputChange = (dispatch,event,type) => {
    const target = event.target;
    const value = target.type ==='checkbox' ? target.checked : target.value;
    const name = target.name;

    return dispatch({
        type,
        payload: {
            name, value
        }
    })
}