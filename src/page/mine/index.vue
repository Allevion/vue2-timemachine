<template>
  <basepageview v-bind="navData">
    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell class="head-image-block" is-link to="/personal">
        <div class="head-content">
          <div class="img-head" style="margin-right: 10px">
            <img class="img-head" :src="headimg"/>
          </div>
          {{username}}
        </div>
      </van-cell>
    </div>

    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell title="关注"  is-link to="/nickname"/>
      <van-cell title="收藏"  is-link to="/focus"/>
    </div>

    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell title="设置" is-link to="/setting"/>
    </div>


    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell title="测试" is-link to="/test"/>
    </div>

    <van-tabbar class="nav-bar" v-model="tabbar">
      <van-tabbar-item icon="shop" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </basepageview>
</template>

<script>
  import basepage from '../../components/common/basepage';
  import utils from "../../utils/utils";
  export default {
    name: "mine",
    mixins:[basepage],
    data() {
      return {
        tabbar: 1,
        navData:{
          title:"我的",
          showBack:false
        },
      }
    },
    methods:{
      initData(){
      },
      goPersonal(){
        this.$router.push("/personal")
      }
    },
    computed:{
      headimg(){
        if (utils.isEmpty(this.userinfo.head_image)){
          return 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=164802939,3427154249&fm=27&gp=0.jpg'
        } else {
          return this.userinfo.head_image
        }
      },
      username(){
        if (utils.isEmpty(this.userinfo.nickname)){
          return '点击登录'
        } else {
          return this.userinfo.nickname
        }
      }
    }

  }
</script>

<style lang="scss">
  .vertical-margin {
    height: 16px;
    border: 0;
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;
  }

  .head-content{
    display: flex;
    flex-direction:row;
    align-items: center;
  }
  .head-image-block {
    height: 90px;
    display: flex;
    align-items: center;
  }
  .img-head{
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
</style>
