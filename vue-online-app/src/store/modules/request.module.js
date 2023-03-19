import axios from "../../axios/apiService"
import store from '../index'
export default {
    namespaced: true,
    state () {
        return {
            requests: []
        }
    },
    getters: {
        request(state){
            return state.requests
        } 
    },
    mutations: {
        setRequest(state, requests) {
            state.requests = requests
        },
        addRequest(state, request){
            state.requests.push(request)
        },
        removeRequest(state, id){
            state.requests = state.requests.filter(request => request.id !== id)
        }
    },
    actions: {
        async create({commit, dispatch}, payload) {
           try {
            const token = store.getters['auth/token']
            const { data } = await axios.post(`/requests.json?auth=${token}`, payload)
            commit('addRequest', {...payload, id: data.name})
            dispatch('setMessage',{
                value:  "Заявка добавлена",
                type: 'primary',
                title: 'Успешно'
            }, {root: true})
           } catch (e){
            dispatch('setMessage',{
                value:  e.message,
                type: 'danger',
                title: 'Ошибка'
            }, {root: true})
           }
        },

        async load({commit, dispatch}, payload) {
            try {
             const token = store.getters['auth/token']
             const { data } = await axios.get(`/requests.json?auth=${token}`)
             const requests = Object.keys(data).map(id => ({...data[id], id}))
             commit('setRequest', requests)
            } catch (e){
           
            }
        },
        async loadOne({commit, dispatch}, id) {
            try {
             const token = store.getters['auth/token']
             const { data } = await axios.get(`/requests/${id}.json?auth=${token}`)
             return data
            } catch (e){
             dispatch('setMessage',{
                 value:  e.message,
                 type: 'danger',
                 title: 'Ошибка'
             }, {root: true})
            }
        },

        async remove({commit, dispatch}, id) {
            try {
             const token = store.getters['auth/token']
             const { data } = await axios.delete(`/requests/${id}.json?auth=${token}`)
             dispatch('setMessage',{
                value: 'Заявка удалена',
                type: 'primary',
                title: 'Успешно'
            }, {root: true})
            commit('removeRequest', id)
            } catch (e){
             dispatch('setMessage',{
                 value:  e.message,
                 type: 'danger',
                 title: 'Ошибка'
             }, {root: true})
            }
        },
        async update({dispatch}, request) {
            try {
             const token = store.getters['auth/token']
             const { data } = await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
             dispatch('setMessage',{
                value: 'Заявка обновлена',
                type: 'primary',
                title: 'Успешно'
            }, {root: true})
            } catch (e){
             dispatch('setMessage',{
                 value:  e.message,
                 type: 'danger',
                 title: 'Ошибка'
             }, {root: true})
            }
        },
    }
    
}