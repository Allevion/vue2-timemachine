<template>
  <!--<div>-->
  <router-view></router-view>
  <!--</div>-->
</template>

<script>
  import objectUtils from "./utils/objectUtils";
  import http from "./utils/http";

  export default {
    components: {},
    methods:{
      async autologin(){
        if (!(objectUtils.isEmpty(this.$store.state.token))) {
          this.$log.debug('auto login start')
          let res = await http.requestJson({
            url:"/user/auto_login",
            params:{
              "access_token":this.$store.state.token
            }
          });
          this.$store.dispatch("UserLogin",res)
          this.$log.debug('auto login success')
        }
      }
    },
    beforeMount(){
      this.$log.debug('app beforeMount')
      this.autologin();

      this.$log.debug('app '+this.$store.state.userinfo)
    }
  }

</script>

<!--<style>-->

<!--</style>-->
