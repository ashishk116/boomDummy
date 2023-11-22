export const loginUser = ({username, password}) => async(dispatch) => {
    try {
        console.log("CHECKING user",username)
        if (username == 'admin' && password == '12345') {
            dispatch({ type: "LOGIN", payload: username })
        }
    } catch (error) {
        console.log(error);
    }
}