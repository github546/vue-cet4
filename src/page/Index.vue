<template>
	<div id="index">
		<headerMd title="CET-4" show="y"></headerMd>
        <leftMenu v-show="$store.state.leftmenuShow"></leftMenu>
        <face></face>
        <div class="more"></div>
        <speed class="animated pulse speed" @click.native="go([$router,'plan'])"></speed>
        <div class="planList">
            <div :class="{planBox:true,nocompleted:!list.finish}" v-for="list in plists">
                <p class="hd">{{list.date}}计划</p>
                <p class="bd" v-if="list.finish">已完成<span>{{list.msg}}<i>+{{list.memory}}</i></span></p>
                <p class="bd" v-else>未完成<span>经验-8</span></p>
            </div>
        </div>
        <div class="planlistMore" v-text="jiazaiTxt" @click="loadMore"></div>
        <!--底部按钮-->
        <div class="doubleBtn bottomBtn">
            <div class="btnLeft bg-green" @click="go([$router,'plan'])">继续计划</div>
            <div class="btnRight bg-orange" @click="go([$router,'revisebegin'])">复习加经验</div>
        </div>
	</div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
import headerMd from '../components/HeaderMd.vue'
import leftMenu from '../components/LeftMenu.vue'
import face from '../components/Face.vue'
import speed from '../components/Speed.vue'
export default{
    name:'index',
    components:{ headerMd,leftMenu,face,speed},
    data(){
        return{
            jiazaiTxt:'滑动加载更多',
            plistdata:'',
            plists:[],//分页数据
            alllistnum:'',//总条数
            allpage:'',//总页数
            curpage:1//当前页数
        }
    },
    computed:{
        ...mapGetters([
            'stime'
        ])
    },
    methods:{
        ...mapMutations([
            'go'
        ]),
        getPlanList:function(p){
            var that = this
            that.axios.post('/json/planlist.php',{
                parmas:{
                    page:p
                }
            }).then(function(response){
                //if(response.data == 1){
                    that.plistdata= eval('('+ response.data +')')
                    that.allpage = that.plistdata.pagesize
                    for(var i in that.plistdata.list){
                        that.plists.push(that.plistdata.list[i])
                    }
                //}
            },function(data){
                that.$router.push({path:'/errorpage'})
            })
        },
        loadMore:function(){
            var that =this
            if(that.curpage < that.allpage){
                that.curpage ++;
                that.getPlanList(that.curpage)
            }
            if(that.curpage == that.allpage){
                that.jiazaiTxt=''
            }
        },
        scrollFunc:function(e){
            let that = this
            let windowHeight = window.screen.height//可见高度
            let scrollHeight = document.body.scrollTop//滚动高度
            let conHeight = document.documentElement.scrollTop//内容高度
            if (windowHeight + scrollHeight > conHeight) {
                if(that.curpage < that.allpage){
                    that.curpage ++;
                    console.log(that.curpage)
                    that.getPlanList(that.curpage)
                }else{
                    that.jiazaiTxt=''
                }
            }
        }
    },
    // created(){
    //     //监听滚动事件
    //     /*注册事件*/
    //     if(document.addEventListener){
    //         document.addEventListener('DOMMouseScroll',this.scrollFunc,false);
    //      }//W3C
    //     window.onmousewheel=document.onmousewheel=this.scrollFunc;
    // },
    mounted(){
        this.getPlanList()
    }
    // mounted:function(){//生命周期里的一个方法
    //     //用同步的ajax方法获取和服务器交换了一下数据，赋值给state
    //     if(this.$parent.come == 0){
    //         this.$parent.come =+1;
    //         //console.log(this.$parent.come)
    //     }else{//第一次进首页不执行
    //         //重写读取
    //         var state,xmlhttp;
    //         xmlhttp = new XMLHttpRequest();
    //         xmlhttp.onreadystatechange = function(){
    //             if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    //                 state = eval('('+ xmlhttp.responseText +')')
    //             }else{
    //                 //处理错误
    //             }
    //         }
    //         xmlhttp.open("Get",'http://'+ this.$store.state.serverIP + '/json/users.php?date='+this.stime,false);//①如果经常刷新首页，服务器cup压力就比较大，需要传个时间函数传给后端的服务器判断，比如?time=，几分钟后再来访问；②url传个date值，减少缓存，使服务器获取时间值之后几秒钟刷新一下或者其他
    //         xmlhttp.send();
    //         this.$store.state.percent = state.percent;
    //     }
    // }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#index{min-height: 100%;}
.more{width: 36px;height: 11px;background: url(../../static/images/more.png) no-repeat;background-size: 36px 11px;margin:10px auto;}
.speed{width:170px;height:170px;border-radius: 50%;}
.doubleBtn{
    width: 80%;margin:0 auto;padding:15px 10%; height:35px;left:0;
     background:rgba(255,255,255,1);
    div{
        display: inline-block;
        width: 50%;
        float: left;
        height: 35px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 1px;
        color: @white;
        font-size: @font-size-normal;
    }
    .btnLeft{
       border-top-left-radius: @border-radius-lg;
       border-bottom-left-radius: @border-radius-lg;
    }
    .btnRight{
        border-top-right-radius: @border-radius-lg;
        border-bottom-right-radius: @border-radius-lg;
    }
}
.planList{
    margin:40px 15px  15px;
    .planBox{
        height:70px;
        width:100%;
        font-size:@font-size-sm;
        border:1px solid #eee;
        margin-bottom: 10px;
        .hd{
            height:30px;
            line-height:30px;
            padding-left: 10px;
            color:@gray-light;
            border-bottom:1px solid #eee;
            background-color:#f1f1f1;
        }
        .bd{
            height:40px;
            line-height:40px;
            padding: 0 10px;
            color:@gray;
            span{
                float:right;
                i{
                    color:@orange;
                }
            }
        }
    }
    .nocompleted{
        border:1px solid @green;
        .hd{
            background-color:@green;
            color:@white;
        }
        .bd{
            span{
                color:@green;
            }
        }
    }
}
.planlistMore{height:12px; margin-bottom:85px;text-align:center;font-size:@font-size-sm;color:#bbb;}
</style>
