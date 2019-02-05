// 0. 모듈 시스템을 사용하는 경우 (예: vue-cli를 이용해서), 
// Vue 및 VueRouter를 가져온 다음 Vue.use(VueRouter)를 호출하십시오.
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. 라우트 컴포넌트를 정의하십시오.
// 다른 파일에서 가져올 수 있습니다.
import Main from './routes/Main.vue';
import Login from './routes/Login.vue';

import Error from './routes/Error.vue';
import UIkit from 'uikit';
import axios from 'axios';
// 2. 라우트를 정의합니다.
// 일부 라우트 정의 각 라우트는 컴포넌트에 맵핑되어야합니다.
// "컴포넌트"는 Vue.extend()를 통해 생성된
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체 일 수 있습니다.
// 나중에 중첩 된 라우트에 대해 이야기하겠습니다.

const requireAuth = (path) => (from, to, next) => {
    const isAuthenticated = !!localStorage.accessToken;
    if (isAuthenticated) {

        axios.defaults.headers.common['Authorization'] = `Token ${localStorage.accessToken}`;
        axios.get('https://councils.tk/valid/')
            .then()
            .catch(function () {
                UIkit.notification("사용자 인증이 유효하지 않습니다.")
                next('/login?returnPath=' + path)
            });
        return next();
    } else {
        UIkit.notification("사용자 인증이 유효하지 않습니다.")
        next('/login?returnPath=' + path)
    }
}

const routes = [
    {
        path: '/',
        name:'root',
        component: Main,
        beforeEnter: requireAuth("root"),
    },
    {
        name: 'login',
        path: '/login',
        component: Login,

    },
    {
        path: '*',
        component: Error
    }
];

// 3. 라우터 인스턴스를 생성하고 `routes` 옵션을 전달하십시오.
// 여기에 추가 옵션을 전달할 수 있지만, 지금은 간단하게 하겠습니다.
export default new VueRouter({
    mode: 'history',
    routes
});
