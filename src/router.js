import Vue from 'vue'
import Router from 'vue-router'
import TheMap from './views/TheMap.vue'
import TheList from './views/TheList.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/map',
        },
        {
            path: '/map',
            component: TheMap,
        },
        {
            path: '/list',
            component: TheList,
        },
        {
            path: '/about',
            component: About,
        }
    ]
})
