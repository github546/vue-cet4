import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const state = {
//     newbi:'0'
// }
var state,xmlhttp
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        state = eval('('+ xmlhttp.responseText +')')
    }else{
        state = {serverIP:0}
    }
}
 //xmlhttp.open("Get","http://192.168.31.160/json/users.php",false);
xmlhttp.open("Get","http://192.168.1.242/json/users.php",false);
xmlhttp.send();
//console.log(state);

const getters = {
	stime:function(){
		var mydate = new Date();
		return mydate.getTime()
	}
}

const mutations = {
	go:function(state,obj){
		obj[0].push({path:'/'+ obj[1]})
	}
}

export default new Vuex.Store({
    state,
    getters,
    mutations

})
