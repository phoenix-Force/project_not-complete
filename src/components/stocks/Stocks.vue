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

    }
  },
  components:{
    stockPanel:stockPanel
  },
  computed:{

  }

}
</script>

<style lang="scss" scoped>
#rw{
  padding-top: 10px;
}

</style>
