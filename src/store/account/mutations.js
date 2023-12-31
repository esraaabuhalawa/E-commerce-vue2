
export const setUserData = (state, val) => {
    state.userData = val
}
export const getUserData = (state, val) => {
    state.currentUser = val
}
export const loginError = (state, payload) => {
    state.loginError = payload
}
export const isAuth = (state, payload) => {
    state.isAuth = payload
}

/*export const authMessage = (state, payload) => {
    state.authMessage = payload
}*/


export const logOut = (state) => {
    if (localStorage.getItem('currentUser')) {
        state.currentUser = null
    }
}
