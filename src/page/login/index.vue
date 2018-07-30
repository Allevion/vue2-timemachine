<template>
  <basepageview v-bind="navData">
    <span slot="title-bar-right">注册</span>
    <van-cell-group class="margin-vertical">
      <van-field v-model="mobile" label="用户名" placehold="请输入手机号"/>
      <van-field v-model="password" label="密码" placehold="请输入密码"/>
    </van-cell-group>
    <!--<van-col class="margin-vertical" >-->
      <van-button class="margin-vertical" type="primary" size="large" @click="login">登录</van-button>
    <!--</van-col>-->
  </basepageview>
</template>

<script>
  import basepage from '../../components/common/basepage';
  import http from "../../utils/http";

  export default {
    name: "login",
    mixins: [basepage],
    data() {
      return {
        navData: {
          title: "登录",
        },
        mobile: "",
        password: "",
      }
    },
    methods: {
      rightClick(){
        this.$router.replace({path:"/register",query:{returnUrl:this.$route.query.returnUrl}})
      },
      login() {
        if ("" != this.mobile && "" != this.password) {
          http.requestJson({
            url:"/user/login",
            method:"post",
            params:{
              'mobile':this.mobile,
              'password':this.password
            }
          }).then(res =>{
            this.$store.dispatch("UserLogin",res);
            this.goNext()
          })
        } else {
          this.$toast("输入手机号和密码");
        }
      },
      goNext(){
        let next = this.$route.query.returnUrl?this.$route.query.returnUrl:'';
        this.$router.replace(next)
      }
    }
  }
</script>

<style lang="scss">

</style>
