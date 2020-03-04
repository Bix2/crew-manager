import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import api from '../api/developers';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
const url = (window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''))

export default new Vuex.Store({
    state: {
        developers: [],
        developer: '',
        frameworks: [],
        roles: [],
    },
    mutations: {
        SET_DEVELOPERS(state, developers) {
            state.developers = developers;
        },
        SET_DEVELOPER(state, developer) {
            state.developer = developer;
        },
        SET_FRAMEWORKS(state, frameworks) {
            state.frameworks = frameworks
        },
        SET_ROLES(state, roles) {
            state.roles = roles
        },
    },
    actions: {
        loadDevelopers({ commit }) {
            api.getAll((response) => {
                commit('SET_DEVELOPERS', response.data);
            })
            // axios
            //     .get('api/developers')
            //     // .then((response) => r.data.data)
            //     .then((response) => {
            //         commit('SET_DEVELOPERS', response.data.data);
            //     });
        },
        getDeveloper({ commit }, id) {
            api.show(id, (response) => {
                commit('SET_DEVELOPER', response.data);
            })
            // axios
            //     .get(`${url}/api/developers/${id}`)
            //     // .then((r) => r.data.data)
            //     .then((response) => {
            //         commit('SET_DEVELOPER', response.data.data);
            //     }); 
        },
        saveDeveloper(context, data) {
            api.create(data, (response) => {
                if (response.status === 201) {
                    state.message = 'Data success has saved'
                }
            context.dispatch('loadDevelopers')
            })
        },
        deleteDeveloper(context, id) {
            let conf = window.confirm('Are you sure you want to fire this developer?')
            if (conf) {
                api.delete(id, (response) => {
                    if (response.status === 200)
                    context.dispatch('loadDevelopers')
                })
            }
        },
        updateDeveloper({ context }, data) {
            api.update(data, (response) => {
                if (response.status === 201) {
                    state.message = 'Data success has saved'
                }
                context.dispatch('getDeveloper')
            })
            // axios
            //     .post('/api/developers/' + data.id, {
            //         data,
            //         _method: 'patch',
            //     })
        },
        loadFrameworks({ commit }) {
            axios
                .get(`${url}/api/frameworks`)
                .then((r) => r.data.data)
                .then((frameworks) => {
                    commit('SET_FRAMEWORKS', frameworks);
                });
        },
        loadRoles({ commit }) {
            axios
                .get(`${url}/api/roles`)
                .then((r) => r.data.data)
                .then((roles) => {
                    commit('SET_ROLES', roles);
                });
        },
    },
});
