<template>
  <basepageview v-bind="navData">
    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell class="head-image-block" is-link to="/nickname">
        <div class="head-content">
          {{userinfo.nickname}}
          <div style="text-align: right;flex: 1">
            <img class="img-head" :src="userinfo.head_image"/>
          </div>
        </div>
      </van-cell>
    </div>

    <div class="van-hairline--top-bottom margin-vertical">
      <van-cell title="nickname" value="修改头像" is-link to="/nickname"/>
      <van-cell title="sex" :value="sexName(userinfo.sex)" is-link to="/sex"/>
      <van-cell title="birthday" value="1990-01-01" is-link to="/birthday"/>
    </div>
    <van-cell class="margin-vertical" title="sign" value="nerver mind" is-link to="/sign"/>

    <van-cell class="margin-vertical" title="退出" @click="logout"/>
  </basepageview>
</template>

<script>

  import basepage from '../../components/common/basepage';

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
    methods: {
      sexName(sex){
        switch (sex){
          case 0:return "未知";
          case 1:return "男";
          case 2:return "女 ";
        }
      }
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
