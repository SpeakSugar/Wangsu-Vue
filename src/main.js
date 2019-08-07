import Vue from 'vue'
import index from './views/index'
import router from './routes/router';
import ElementUI from 'element-ui';
import './assets/styles/common.scss';

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
    router,
    render: h => h(index),
}).$mount('#app')
