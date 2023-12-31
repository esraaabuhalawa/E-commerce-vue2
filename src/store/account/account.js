import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'



export default {
    state() {
        return {
            userData: {},
            currentUser: null,
            loginError: '',
            isAuth: false,
           // authMessage: ''

        }
    },
    getters,
    mutations,
    actions,
}
