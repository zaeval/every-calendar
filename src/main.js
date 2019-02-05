import Vue from 'vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import App from './App.vue'
import router from './route';
import store from './store';
import mq from './mq'

UIkit.use(Icons);
//
//// components can be called from the imported UIkit reference
//UIkit.notification('Hello world.');

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    mq
});
