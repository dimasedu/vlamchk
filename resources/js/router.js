import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import store from './store.js'

import Setting from './pages/referensi/Setting.vue'

import IndexPegawai from './pages/pegawai/Index.vue'
import DataPegawai from './pages/pegawai/Pegawai.vue'

import IndexBanksoal from './pages/banksoal/Index.vue'
import DataBanksoal from './pages/banksoal/Banksoal.vue'
import SoalBanksoal from './pages/banksoal/SoalBanksoal.vue'


Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { requiresAuth: true }
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/Setting',
			name: 'setting',
			component: Setting,
			meta: { requiresAuth: true, title: 'Setting'}
		},
		{
			path: '/pegawai',
			component: IndexPegawai,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'pegawai.data',
					component: DataPegawai,
					meta: { title: 'Manage Pegawai'}
				}
			]
		},
		{
			path: '/banksoal',
			component: IndexBanksoal,
			meta: { requiresAuth: true },
			children: [ 
				{
					path: '',
					name: 'banksoal.data',
					component: DataBanksoal,
					meta: { title: 'Manage banksoal' }
				},
				{
					path: 'soal/:id',
					name: 'banksoals.soal',
					component: SoalBanksoal,
					meta: { title: 'Manage soal' }
				}
			]
		}
	]
})

router.beforeEach((to, from , next) => {
	store.commit('CLEAR_ERRORS')
	if (to.matched.some(record => record.meta.requiresAuth)) {
		let auth = store.getters.isAuth
		if (!auth) {
			next({ name: 'login' })
		}
		else {
			next()
		}
	}
	else {
		next()
	}
})

export default router