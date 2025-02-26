import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
        {
			path: '/table',
			component: () => import('../views/Table.vue')
		},
		{
			path: '/update/:id',
			component: () => import('../components/Update.vue')
		},
        {
			path: '/contact',
			component: () => import('../views/Contact.vue')
		},
		{
			path: '/settings',
			component: () => import('../views/Settings.vue')
		},
	],
})

export default router