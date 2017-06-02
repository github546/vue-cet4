import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('!style-loader!css-loader!less-loader!./assets/css/main.less');
import Index from './page/Index.vue'
import Creat from './page/Creat.vue'
import CreatSelect from './page/CreatSelect.vue'
import CreatFinish from './page/CreatFinish.vue'
import CreatSucceed from './page/CreatSucceed.vue'
import ErrorPage from './page/ErrorPage.vue'
import Page404 from './page/Page404.vue'

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	    {path:'/',component:Index},
        {path:'/index',component:Index},
	    {path:'/creat',component:Creat},
        {path:'/creatselect',component:CreatSelect},
        {path:'/creatfinish',component:CreatFinish},
        {path:'/creatsucceed',component:CreatSucceed},
        {path:'/errorpage',component:ErrorPage},
        {path:'*',component:Page404}
	]
})

/* eslint-disable no-new */
var vm = new Vue({
    router,
    store,
    data:{
        examTime:'2017-6-17',
        preExamDay:'30'
    },
    template:`
        <div>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    `,
    beforeCreate:function(){
        //和服务器终端连接 跳转
        if(this.$store.state.serverIP == 0){
            router.push({path:'/error'})
        }
        //判断是否为注册用户
        if(this.$store.state.newbi == 1){
            router.push({path:'/index'})
        }else{
            router.push({path:'/creat'})
        }
    }
}).$mount("#app")
