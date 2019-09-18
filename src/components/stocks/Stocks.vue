<template>
<div class="row" id="rw">
  <stock-panel :key="index" v-for="(x,index) in stocks"></stock-panel>



</div>
</template>
<script>
import stockPanel from "./Stock.vue"
export default {
  data(){
    return{
      stocks:[
        {id:'1',name:'Apple',value:2200},
        {id:'2',name:'Google',value:2600},
        {id:'3',name:'Facebook',value:1800},
        {id:'4',name:'twitter',value:1500},
        {id:'5',name:'tata',value:1690},
        {id:'6',name:'IBM',value:1700},
        {id:'7',name:'KFC',value:1650}
      ]
    }
  },
  components:{
    stockPanel:stockPanel
  }

}
</script>

<style lang="scss" scoped>
#rw{
  padding-top: 10px;
}

</style>
