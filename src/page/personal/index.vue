<template>
  <basepageview v-bind="navData">
    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell class="head-image-block" to="/nickname">
        <div class="head-content">
          {{$store.state.userinfo.nickname}}
          <div style="text-align: right;flex: 1">
            <img class="img-head" :src="headimg"/>
          </div>
        </div>
      </van-cell>
    </div>

    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell title="nickname" :value="$store.state.userinfo.nickname" is-link to="/nickname"/>
      <van-cell title="sex" :value="sexName($store.state.userinfo.sex)" is-link to="/sex"/>
      <van-cell title="birthday" value="1990-01-01" is-link to="/birthday"/>
    </div>
    <van-cell class="margin-vertical" title="sign" value="nerver mind" is-link to="/sign"/>

    <van-cell class="margin-vertical" title="退出" @click="logout"/>
  </basepageview>
</template>

<script>

  import basepage from '../../components/common/basepage';
  import objectUtils from "../../utils/objectUtils";

  export default {
    name: "personal",
    mixins: [basepage],
    data() {
      return {
        needLogin:true,
        navData: {
          title: "个人中心",
        },
      }
    },
    computed:{
      headimg(){
        if (objectUtils.isEmpty(this.$store.state.userinfo.head_image)){
          return 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=164802939,3427154249&fm=27&gp=0.jpg'
        } else {
          return this.$store.state.userinfo.head_image
        }
      },
    },
    methods: {
      sexName(sex){
        switch (sex){
          case 0:return "未知";
          case 1:return "男";
          case 2:return "女 ";
        }
      },
    }
  }
</script>

<style scoped lang="scss">
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
    float:right;
  }

</style>
