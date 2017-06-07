<template>
    <div id="planShow">
        <face></face>
        <ul class="formList">
            <li  v-for="list in formLists" :id="list.id" @click="toggle(list.id)">
                <div class="form"><i>{{list.id}}.</i>{{list.form}}</div>
                <div class="hideInfo" v-show="list.id == index">
                    <p class="ipa">[{{list.ipa}}]</p>
                    <p class="meaning">{{list.meaning}}</p>
                </div>
            </li>
        </ul>
        <audio id="music" autoplay="true">
            <source src="" type="audio/mp3">
        </audio>
        <bottomBtn value="返回首页" color="bg-orange"  @click.native="go([$router,'index'])"></bottomBtn>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import face from '../components/Face.vue'
import bottomBtn from '../components/BottomBtn.vue'
export default{
    name:'planShow',
    components:{ face,bottomBtn },
    data(){
        return{
            index:'1',
            formLists:this.$store.state.planForm
        }
    },
    methods:{
        ...mapMutations([
            'go'
        ]),
        toggle(id){
            this.index = id;
            var music = document.getElementById('music');
            music.src = 'http://'+ this.$store.state.serverIP + '/sound/'+ this.formLists[id-1].form +'.mp3';
            music.play();
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#planShow{background-color:@bg-gray-color;padding-bottom:70px}
.formList{
    margin: 10px;
    li{
        margin-bottom: 10px;background-color:@white;
    }
    .form{
        height: 65px;
        line-height:65px;
        color: @green;
        text-align: center;
        font-size:200%;
        position:relative;
        i{
            display: inline-block;
            line-height:16px;
            position:absolute;
            top:26px;
            left:22px;
            font-style:italic;
            font-size:60%;
            color: @gray-lighter;
        }
    }
    .hideInfo{
        padding:10px 20px;
        .ipa{
            color:@gray-light;
            font-style: italic;
            padding-bottom:10px;
        }
        .meaning{
            font-size: @font-size-sm;
            color:@gray;
        }
    }
}
</style>
