import axios from "axios"

const API_KEY = "AIzaSyAEkRsnOFVzIcLuNqUasOUqeOfZlopydIU"

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('jwt-token') || null,
            email: localStorage.getItem('email') || null
        }
    },
    getters: {
        token (state) {
            return state.token
        },
        isAutheticated(state) {
            return !!state.token
        }
        ,email (state) {
            return state.email
        }
    },
    actions : {
        async login({ commit, dispatch }, payload) {
            console.log(payload)
            try {
                let {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{...payload.controlledValues, returnSecureToken: true})
                commit('setToken' , data.idToken)
                commit('setEmail' , data.email)
                commit('removeMessage' , null, {root: true})
            } catch (e){
                dispatch('setMessage',{
                    value:  e.response.data.error.message,
                    type: 'danger',
                    title: 'Oшибка'
                }, {root: true})
                throw new Error()
            }
        }
    },
    mutations: {
        setToken(state, token){
            state.token = token
            localStorage.setItem('jwt-token', token)
        },
        setEmail(state, email){
            state.email = email
            localStorage.setItem('email', email)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem('jwt-token')
            localStorage.removeItem('email')
        }
    }
}