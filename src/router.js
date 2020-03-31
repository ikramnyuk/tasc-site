import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './views/Home/index';
import Privacy from './views/Privacy/index';
import Layout from './views/Layout/index';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Home,
                name: 'Home'
            }
        ]
    },
    {
        path: '/privacy',
        component: Privacy,
        name: 'Privacy'
    }
];

const Router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default Router;