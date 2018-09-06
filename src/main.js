import Vue from "vue"

import router from "./router.js"
import App from "./App.vue"
//引入minit-ui的Header组件
import { Header } from 'mint-ui';
import './libs/mui/css/mui.min.css';
Vue.component(Header.name, Header);
new Vue({
    el: "#app",
    data(){
        return {
            msg: "和咯哦"
        }
    },
    render: (h) => {
        return h(App)
    },
    router
});