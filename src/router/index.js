import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

]


const router = new VueRouter({
    base: process.env.VUE_APP_URL,
    MODE: 'hash',
    routes
})

export default router