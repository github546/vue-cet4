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
xmlhttp.open("Get","http://192.168.1.233/json/users.php",false);
xmlhttp.send();
//console.log(state);

export default new Vuex.Store({
    state
})
