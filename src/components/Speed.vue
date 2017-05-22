<template>
    <div id="speed">
        <div class="tempText">{{percentText}}</div>
        <div id="main">
            <div id="big" v-show="big"></div>
            <div id="small" v-show="small"></div>
            <div id="hui"></div>
            <div id="circlesText">{{percentTextSay}}</div>
            <div id="circles">
                <div id="percent" class="bg-master-gradient"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'speed',
    data(){
        return{
            big:true,
            small:true,
            percentTextSay:'已完成',
            percent:this.$store.state.percent
        }
    },
    computed:{
        percentText:function(){
            if(this.percent == 0){
                this.percentTextSay ='点击这里开始'
            }
            return this.percent + '%'
        }
    },
    methods:{
        change:function(){
            if(this.percent < 50){
                var small = parseInt(180-this.percent*3.6);
                document.getElementById("small").setAttribute("style","transform:rotate(-"+small+"deg)");
            }else{
                var big = parseInt(this.percent*3.6-180);
                document.getElementById("small").setAttribute("style","background:#90d5b9;transform:rotate(-180deg)");
                document.getElementById("big").setAttribute("style","transform:rotate("+big+"deg)");
            }
        }
    },
    mounted:function(){
        this.change();
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.bg-master-gradient{
    background: linear-gradient(270deg, @green 0%, @turquoise 100%);
}
.tempText{
    color: @white;
    position: absolute;
    z-index: 80;
    width: 100%;
    text-align: center;
    margin-top: 65px;
    font-size: @font-size-lg;
}
#speed{width: 100%;margin: 25px auto;}
#main{
    width: 170px;
    margin: 0 auto;
}
#big{
    position: absolute;
    z-index: 4;
    width: 170px;
    height: 171px;
    margin-top: -1px;
    /*transform:rotate(0deg);*/
    clip:rect(0px, 85px, 170px, 0px);
    border-radius: 170px;
    background-color: #f4f4f4;
}
#small{
    position: absolute;
    z-index: 5;
    width: 170px;
    height: 167px;
    /*transform:rotate(180deg);*/
    clip:rect(0px, 85px, 170px, 0px);
    border-radius: 170px;
    background-color: #f4f4f4;
}
#circlesText{
    position: absolute;
    z-index:20;
    color:@white;
    margin-top: 85px;
    margin: 0 auto;
    line-height: 200px;
    width: 170px;
    height: 170px;
    text-align: center;
}
#circles{
    width: 145px;
    height: 143px;
    padding: 10px;
    border-radius: 145px;
    border:2px solid #98d5b9;
    background-color:#98d5b9;
}
#percent{
    width: 140px;
    height: 140px;
    border-radius: 140%;
    line-height: 140px;
    text-align: center;
    color: @white;
    font-size: @font-size-lg;
    margin:2px 0 0 2px;
    position: absolute;
    z-index: 5;
}
</style>
