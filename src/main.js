import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('../static/images/loading-3.gif'),
    loading: require('../static/images/loading-3.gif'),
    attempt: 1,
    listenEvents: [ 'scroll', 'mousewheel' ]
})

//引用axios
//import axios from 'axios'//直接在.vue文件中引入使用
import axios from '../node_modules/axios'//注册为全局的函数
import {stringify} from 'qs'//引用qs(全局的)，一种转化数据的工具（这个模块在安装axios的时候就已经安装了，不需要另外安装）
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://192.168.1.233'; // 基础url前缀
axios.defaults.timeout = 10000; // 设置ajax请求超时时间
axios.defaults.transformRequest = [function(data){
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs
    data = stringify(data);//stringify:将json 转成后端可接收的数据
    return data;
}];
axios.defaults.transformResponse = [function(data){
    // 这里提前处理返回的数据
    return data;
}];
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.withCredentials = true //axios 默认为false不发送cookie，如果要发送，需要全局设置改成true，但设置true 跨域会产生问题

//添加拦截器
// axios.interceptors.request.use(function (config) {//添加一个请求拦截器
//     // 在发送请求之前做点什么事
//     return config;
// }, function (error) {
//     // 请求失败做点什么
//     return Promise.reject(error);
// });
// axios.interceptors.response.use(function (response) {//添加一个响应拦截器
//     // 对响应数据做点什么
//     return response.data;
// }, function (error) {
//     // 响应失败做点什么
//     return Promise.reject(error);
// });


require('!style-loader!css-loader!less-loader!./assets/css/main.less');
require('!style-loader!css-loader!less-loader!./assets/css/animate.min.css');

import Index from './page/Index.vue'
import Creat from './page/Creat.vue'
import CreatSelect from './page/CreatSelect.vue'
import CreatFinish from './page/CreatFinish.vue'
import CreatSucceed from './page/CreatSucceed.vue'
import ReviseBegin from './page/ReviseBegin.vue'
import Revise from './page/Revise.vue'
import ReviseError from './page/ReviseError.vue'
import Plan from './page/Plan.vue'
import PlanShow from './page/PlanShow.vue'
import ErrorPage from './page/ErrorPage.vue'
import Page404 from './page/Page404.vue'

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	    {path:'/',component:Index,meta:{title:'首页'}},
        {path:'/index',component:Index},
	    {path:'/creat',component:Creat},
        {path:'/creatselect',component:CreatSelect},
        {path:'/creatfinish',component:CreatFinish},
        {path:'/creatsucceed',component:CreatSucceed},
        {path:'/revisebegin',component:ReviseBegin},
        {path:'/revise',component:Revise},
        {path:'/reviseerror',component:ReviseError},
        {path:'/plan',component:Plan},
        {path:'/planshow',component:PlanShow},
        {path:'/errorpage',component:ErrorPage}
	]
})

/* eslint-disable no-new */
var vm = new Vue({
    router,
    store,
    axios,
    data:{
        examTime:'2017-6-17',
        preExamDay:'30',
        come:0
    },
    template:`
        <div id="page">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    `,
    beforeCreate:function(){
        //和服务器终端连接 跳转
        if(this.$store.state.serverIP == 0){
            router.push({path:'/errorpage'})
        }
        //判断是否为注册用户
        if(this.$store.state.newbi == 1){
            router.push({path:'/index'})
        }else{
            router.push({path:'/creat'})
        }
    }
}).$mount("#app")
