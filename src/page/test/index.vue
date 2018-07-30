<template>
  <basepageview v-bind="navData">
    <comment></comment>
    <van-button @click="test">{{text}}</van-button>
    <get-code></get-code>
  </basepageview>
</template>

<script>
  import basepage from '../../components/common/basepage';
  import http from "../../utils/http";
  import Comment from "../../components/comment/index";
  import objectUtils from "../../utils/objectUtils";
  import GetCode from "../../components/getCode/index";
  export default {
    name: "test",
    components: {GetCode, Comment},
    mixins: [basepage],
    data(){
      return {
        navData:{
          title:"test",
        }
      }
    },
    methods:{
      tologin(){
        window.location.href = "https://twap.88mmmoney.com/my/toLogin.htm?app=EWPerson&returnUrl=http%3A%2F%2Flocalhost:8088%2Ftest"
      },
      getdata(){
        http.request({url:"/team/getTeamList.htm",method:"post",})
          .then(res=>{
            console.log(res.data)
          })
      },
      test(){
        this.$log.info('debug log');
        this.$log.warn('test log');
        this.$log.error('error',123)
        // console.log(utils.isEmpty(false))
      }
    },
    computed:{
      text(){
        return process.apiHost
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
