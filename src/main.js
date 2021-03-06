import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify';

import vueSmoothScroll from 'vue2-smooth-scroll';
import vueScrollTo from 'vue-scrollto';
 
Vue.use(vueScrollTo);
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app')
