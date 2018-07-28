<template>
  <basepageview v-bind="navData">
    <span slot="title-bar-right">登录</span>
    <van-cell-group class="margin-vertical">
      <van-field v-model="mobile" label="用户名" placehold="请输入手机号"/>
      <van-field v-model="password" label="密码" placehold="请输入密码"/>
      <van-field v-model="authcode" label="验证码" placehold="请输入验证码">
        <get-code slot="button" @getCode="getCode" ></get-code>
        <!--<van-button slot="button" type="primary" size="small">发送验证码</van-button>-->
      </van-field>
    </van-cell-group>
    <van-button class="margin-vertical" type="primary" size="large" @click="register">注册</van-button>
  </basepageview>
</template>

<script>
  import basepage from '../../components/common/basepage';
  import GetCode from "../../components/getCode/index";
  export default {
    name: "register",
    components: {GetCode},
    mixins: [basepage],
    data(){
      return {
        navData:{
          title:"注册",
        },
        mobile: "",
        password: "",
        authcode: ""
      }
    },
    methods:{
      rightClick(){
        this.$router.replace({path:"/login",query:{returnUrl:this.$route.query.returnUrl}})
      },
      goNext(){
        let next = this.$route.query.returnUrl?this.$route.query.returnUrl:'';
        this.$router.replace(next)
      },
      register(){

      },
      getCode(){
        this.$log.debug('getcode')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
