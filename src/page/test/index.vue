<template>
  <basepageview v-bind="navData">
    <comment></comment>
    <van-button @click="test">{{text}}</van-button>
    <button ref="nextbutton" >nextbutton</button>
    <upload-pic v-model="showPicSelector"></upload-pic>
  </basepageview>
</template>

<script>
  import basepage from '../../components/common/basepage';
  import http from "../../utils/http";
  import Comment from "../../components/comment/index";
  import objectUtils from "../../utils/objectUtils";
  import GetCode from "../../components/getCode/index";
  import UploadPic from "../../components/uploadPic/index";
  export default {
    name: "test",
    components: {UploadPic, GetCode, Comment},
    mixins: [basepage],
    data(){
      return {
        navData:{
          title:"test",
        },
        showPicSelector:false,
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
        // this.$log.info(this.$refs.selectPhoto)
        // this.$log.info(this.$refs.selectPhoto.$el.children[0])
        // this.$refs.selectPhoto.$el.children[0].click()
        this.showPicSelector = true

      }
    },
    computed:{
      text(){

      }
    }
  }
</script>

<style scoped lang="scss">

</style>
