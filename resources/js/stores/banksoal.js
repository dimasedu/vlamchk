import $axios from '../api.js'

const state = () => ({
	banksoals: [],
	page: 1,
	id: ''
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.banksoals = payload
	},
	SET_PAGE(state, payload) {
		state.page = payload
	},
	SET_ID_UPDATE(state, payload) {
		state.id = payload
	}
}

const actions = {
	getBanksoals({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload : ''
		return new Promise(( resolve, reject) => {
			$axios.get(`/banksoals?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}