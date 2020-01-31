import Vue from 'vue'
import Vuex from 'vuex'

import auth from './stores/auth.js'
import user from './stores/user.js'
import reference from './stores/reference.js'
import banksoal from './stores/banksoal.js'
import soal from './stores/soal.js'
import ujian from './stores/ujian.js'
import jadwal from './stores/jadwal.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		user,
		reference,
		banksoal,
		soal,
		ujian,
		jadwal
	},
	state: {
		token: localStorage.getItem('token'),
		role: localStorage.getItem('role'),
		errors: [],
		isLoading: false,
		isLoadinger: false
	},
	getters: {
		isAuth: state => {
			return state.token != "null" && state.token != null
		},
		isAdmin: state => {
			return state.role != "null" && state.role != null && state.role != 5
		},
		isLoading: state => {
			return state.isLoading
		},
		isLoadinger: state => {
			return state.isLoadinger
		}
	},
	mutations: {
		SET_TOKEN(state, payload) {
			state.token = payload
		},
		SET_ROLE(state, payload) {
			state.role = payload
		},
		SET_ERRORS(state, payload) {
			state.errors = payload
		},
		CLEAR_ERRORS(state) {
			state.errors = []
		},
		SET_LOADING(state, payload) {
			state.isLoading = payload
		},
		SET_LOADINGER(state, payload) {
			state.isLoadinger = payload
		}
	}
})

export default store