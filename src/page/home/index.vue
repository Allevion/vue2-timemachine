<template>
  <!--<div>-->
  <basepageview v-bind="navData">

    <div class="van-hairline--bottom">
      <van-search
        v-model="searchContent"
        placeholder="请输入搜索内容"
        @search="onSearch"
        @cancel="onSearchCancel"
        background="white"
      ></van-search>
    </div>
    <list @requestList="requestData" :data="pageData">
      <template scope="timeline">
        <timeline :data="timeline.item" :class="{'margin-vertical':timeline.index!=0}"/>
      </template>
    </list>
    <div class="van-tabbar">
      <van-tabbar class="nav-bar" v-model="tabbar">
        <van-tabbar-item icon="shop" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" to="/mine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </basepageview>
  <!--</div>-->
</template>

<script>
  import basepage from '../../components/common/basepage';
  import Timeline from "../../components/timeline/index";
  import http from '../../utils/http'
  import {PageListBean} from "../../model/models";
  import List from "../../components/list/index";

  export default {
    components: {List, Timeline},
    mixins: [basepage],
    name: "home",
    data() {
      return {
        tabbar: 0,
        navData: {
          title: "home",
          showTitle: false,
        },
        pageData:new PageListBean(),
        searchContent: ""
      }
    },
    methods: {
      async requestData(){
        let config = {
          url: '/test/getdata',
          params: {'index': this.pageData.getNextIndex()}
        };
        let result = await http.requestJson(config);
        this.pageData.appendData(new PageListBean(result));
      },
      onSearch() {

      },
      onSearchCancel() {

      }
    },
    // beforeCreate() {
    //   console.log("beforeCreate========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
    // created() {
    //   console.log("context:"+this)
    //   console.log("created========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
    // beforeMount: function () {
    //   console.log("beforeMount========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
    // mounted: function () {
    //   console.log("mounted========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
  }
</script>

<style lang="scss">

</style>
