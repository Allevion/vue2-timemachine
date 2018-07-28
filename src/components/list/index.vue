<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <van-list :finished="data.page.finished" @load="loadmore">
      <div v-for="(item,index) in data.listData">
        <slot :item="item" :index="index"/>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script>
  import {PageListBean} from "../../model/models";

  export default {
    name: "list",
    data(){
      return {
        loading:false,
      }
    },
    props:{
      data:{
        type:PageListBean,
        default:new PageListBean()
      },
    },
    methods:{
      onRefresh(){
        this.loading = true;
        data.init();
        this.$emit('requestList');
        this.loading = false
      },
      loadmore(){
        this.$emit('requestList')
      }
    },
  }
</script>

<style lang="scss">

</style>
