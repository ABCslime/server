import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/App.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'App',
        component: Home
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
