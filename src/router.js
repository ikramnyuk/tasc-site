import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './views/Home/index';
import About from './views/About/index';
import Contact from './views/Contact/index';
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
            },
            {
                path: '/about',
                component: About,
                name: 'About'
            },
            {
                path: '/contact',
                component: Contact,
                name: 'Contact'
            }
        ]
    }
];

const scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        return {
            selector: to.hash
            // , offset: { x: 0, y: 10 }
        }
    }
    
    console.log(from, savedPosition);
}

const Router = new VueRouter({
    routes,
    scrollBehavior
});

export default Router;